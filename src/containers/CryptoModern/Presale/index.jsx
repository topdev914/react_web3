import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Text from 'common/components/Text'
import Image from 'next/image'
import Button from 'common/components/Button'
import Container from 'common/components/UI/Container'

import { Spinner } from 'react-bootstrap'
import BSCContext from 'context/BSCContext'
import web3 from 'web3'
import { round } from 'common/utils/numbers'
import { useRouter } from 'next/dist/client/router'
import BannerWrapper, { BannerContent } from './presale.style'

const Presale = () => {
    const router = useRouter()
    const { query } = router
    const presaleGUID = Object.keys(query)?.includes('fb3ca69d-0bab-4110-8b2b-4fcf11a60298')
    const withdrawGUID = Object.keys(query)?.includes('8405945e-c2e4-4777-81be-e31a11106754')

    const presaleTokens = 300000000000
    const presaleBNB = presaleGUID ? 425 : 400
    const [loadingPurchase, setLoadingPurchase] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [totalPurchasedBnb, setTotalPurchasedBnb] = useState(0)
    const [presaleFinalized, setPresaleFinalized] = useState(false)
    const [presalePurchased, setPresalePurchased] = useState(false)
    const [loadingWithdraw, setLoadingWithdraw] = useState(false)
    const [maxPurchaseableTokens, setMaxPurchaseableTokens] = useState(0)

    const bscContext = useContext(BSCContext)

    useEffect(() => {
        bscContext.setLoadPresaleContract(true)
        localStorage.removeItem('walletconnect')
    }, [])

    useEffect(async () => {
        if (bscContext.presaleContract) {
            const tokensPurchasedInWei = await bscContext.presaleContract.methods.weiRaised().call()
            const totalPurchasedTokens = web3.utils.fromWei(tokensPurchasedInWei)
            setTotalPurchasedBnb(round(totalPurchasedTokens, 0))
            const finalized = await bscContext.presaleContract.methods.finalized().call()
            setPresaleFinalized(finalized)
        }
    }, [bscContext.presaleContract])

    useEffect(async () => {
        if (bscContext.currentAccountAddress && bscContext.presaleContract) {
            const presalePurchasedValue = await bscContext.presaleContract.methods.purchasedBnb(bscContext.currentAccountAddress).call()
            setPresalePurchased(parseFloat(presalePurchasedValue) > 0)
        }
    }, [bscContext.currentAccountAddress, bscContext.presaleContract])

    useEffect(async () => {
        if (bscContext.currentAccountAddress && bscContext.presaleContract) {
            const bnbAllowance = await bscContext.presaleContract.methods.viewBnbAllowanceForUser(bscContext.currentAccountAddress).call()
            const allowedBnb = web3.utils.fromWei(bnbAllowance)
            setMaxPurchaseableTokens(allowedBnb)
        }
    }, [bscContext.currentAccountAddress, bscContext.presaleContract])

    const handleBuyPresale = () => {
        const bnbAmount = web3.utils.toWei(`${maxPurchaseableTokens}`)
        if (bscContext.presaleContract) {
            setLoadingPurchase(true)
            bscContext.presaleContract.methods
                .buyTokens(bscContext.currentAccountAddress)
                .send({ from: bscContext.currentAccountAddress, value: bnbAmount })
                .then((result) => {
                    if (Object.keys(result).length === 0) {
                        setErrorMessage(`This wallet is not white listed!`)
                    }
                    setLoadingPurchase(false)
                    setPresalePurchased(true)
                })
                .catch(() => {
                    setErrorMessage('Something went wrong with your purchase')
                    setLoadingPurchase(false)
                })
        }
    }

    let presaleModuleContent = bscContext.currentAccountAddress && (
        <>
            {maxPurchaseableTokens < 1 ? (
                <>
                    <Text content="Unable to contribute to presale!" />
                    <Text content="This address is not white listed or you have already contributed!" />
                </>
            ) : (
                <>
                    <Text className="max-contribution" as="div" content="Max Contribution:" />
                    <Text className="highlight" as="p" content={`${maxPurchaseableTokens} BNB = ${(maxPurchaseableTokens * (presaleTokens / 500)).toLocaleString()} UTOPIA`} />
                    <Text className="wallet-address" content={`Wallet Address: ${bscContext.currentAccountAddress}`} />
                    <Text className="current-balance" as="div" content={`Current Balance: ${round(web3.utils.fromWei(bscContext.currentBnbBalance), 4)} BNB`} />
                    {parseFloat(bscContext.currentBnbBalance) > parseInt(maxPurchaseableTokens, 10) ? (
                        <Button title="Contribute to the Presale!" onClick={handleBuyPresale} />
                    ) : (
                        <Text content="Insufficient Funds..." />
                    )}
                </>
            )}
        </>
    )

    const handleWithdraw = () => {
        if (bscContext.presaleContract && bscContext.currentAccountAddress) {
            setLoadingWithdraw(true)
            bscContext.presaleContract.methods
                .withdrawTokens()
                .send({ from: bscContext.currentAccountAddress })
                .then((result) => {
                    setLoadingWithdraw(false)
                    setErrorMessage('Tokens Successfully Withdrawn!')
                })
                .catch((err) => {
                    setLoadingWithdraw(false)
                    setErrorMessage('Error withdrawing tokens. (No Tokens left to withdraw)')
                })
        }
    }

    if (presaleFinalized || withdrawGUID) {
        presaleModuleContent = (
            <>
                <Text content="Thank you for Participating!" />
                <Button title="Withdraw Purchased UTOPIA" onClick={() => handleWithdraw()} />
            </>
        )
    }

    if (loadingPurchase) {
        presaleModuleContent = (
            <>
                <Text content="Purchasing Presale..." />
                <p>
                    <Spinner size="" animation="border" variant="primary" />
                </p>
            </>
        )
    }

    if (loadingWithdraw) {
        presaleModuleContent = (
            <>
                <Text content="Loading Withdraw..." />
                <p>
                    <Spinner size="" animation="border" variant="primary" />
                </p>
            </>
        )
    }

    if (errorMessage) {
        presaleModuleContent = <Text content={errorMessage} />
    }

    if (totalPurchasedBnb >= presaleBNB && !presaleFinalized && !withdrawGUID) {
        presaleModuleContent = (
            <>
                <Text content="Presale Sold out!" />
                <Text content="Thank you for your consideration." />
                <Text content="Join us for our launch on Oct. 2nd" />
            </>
        )
    }
    return (
        <BannerWrapper id="home">
            <Container>
                <BannerContent>
                    <Fade up delay={50}>
                        <Image src="/assets/image/utopia/Utopia_dark_full.png" alt="Utopia Banner" width={1258} height={316} priority unoptimized />
                    </Fade>
                    <Fade up delay={100}>
                        {presaleGUID ? <Text className="tagline" content="Take part in our Special Presale!" /> : <Text className="tagline" content="Take part in our Presale!" />}
                    </Fade>
                    <Fade up delay={100}>
                        <>
                            {bscContext.hasDappBrowser ? (
                                <div className="presale-module">{bscContext.currentAccountAddress ? presaleModuleContent : <Text content="No Wallet Address Provided" />}</div>
                            ) : (
                                <>
                                    <div className="presale-module dapp-disabled">
                                        {presaleFinalized && <Text content="Presale Concluded!" />}
                                        <Text content={presaleFinalized ? 'Please connect your wallet to Withdraw' : 'Please connect your wallet to continue'} />
                                        <Button
                                            title="Connect Wallet"
                                            onClick={async () => {
                                                if (window.ethereum) {
                                                    await bscContext.triggerMetaMaskModal()
                                                } else {
                                                    await bscContext.triggerDappModal()
                                                }
                                            }}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="presaleBar">
                                <div className="presaleProgressBar">
                                    <div className="filledBar" style={{ width: `100%` }} />
                                    <Text className="progressText" as="div" content="FULLY FUNDED!" />
                                </div>
                            </div>

                            <Text content="REGISTER THE UTOPIA TOKEN ADDRESS TO YOUR WALLET" />
                            <Text content="For Metamask users:" />
                            <Button
                                title="Click here to register token"
                                onClick={async () => {
                                    await bscContext.registerUTPToken()
                                }}
                            />
                            <Text content="For all other users, manually add the following address:" />
                            <Text className="highlight" content="0x1a1d7c7A92e8d7f0de10Ae532ECD9f63B7EAf67c" />
                        </>
                    </Fade>
                </BannerContent>
            </Container>
        </BannerWrapper>
    )
}

export default Presale
