export default [
    {
        inputs: [
            { internalType: 'uint256', name: '_bnbUtopiaRate', type: 'uint256' },
            { internalType: 'contract IERC20', name: '_token', type: 'address' },
            { internalType: 'uint256', name: '_openingTime', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    { anonymous: false, inputs: [], name: 'CrowdsaleFinalized', type: 'event' },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'purchaser', type: 'address' },
            { indexed: true, internalType: 'address', name: 'beneficiary', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'bnbValue', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'tokens', type: 'uint256' },
        ],
        name: 'TokenPurchase',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'withdrawer', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'tokens', type: 'uint256' },
        ],
        name: 'TokenWithdrawal',
        type: 'event',
    },
    { stateMutability: 'payable', type: 'fallback' },
    {
        inputs: [{ internalType: 'uint256', name: '_weiAmountForPurchase', type: 'uint256' }],
        name: '_getTokenAmount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_beneficiary', type: 'address' },
            { internalType: 'uint256', name: '_weiAmountForPurchase', type: 'uint256' },
        ],
        name: '_preValidatePurchase',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    { inputs: [], name: 'bnbUtopiaRate', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    { inputs: [{ internalType: 'address', name: '_beneficiary', type: 'address' }], name: 'buyTokens', outputs: [], stateMutability: 'payable', type: 'function' },
    { inputs: [], name: 'finalize', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    { inputs: [], name: 'finalized', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'forwardFunds', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    { inputs: [], name: 'getOpeningTime', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'isOpen', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'address', name: '_beneficiary', type: 'address' }],
        name: 'maxBnb',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    { inputs: [], name: 'numberOfPurchasers', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'openingTime', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'purchasedBnb',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'purchaserList',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_address', type: 'address' },
            { internalType: 'uint256', name: 'weiAllowed', type: 'uint256' },
        ],
        name: 'setBnbAllowanceForUser',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    { inputs: [], name: 'token', outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'tokensAlreadyPurchased', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [
            { internalType: 'address', name: 'tokenAddress', type: 'address' },
            { internalType: 'uint256', name: 'tokens', type: 'uint256' },
        ],
        name: 'transferAnyERC20Token',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
        name: 'viewBnbAllowanceForUser',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    { inputs: [], name: 'weiRaised', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'withdrawTokens', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    { stateMutability: 'payable', type: 'receive' },
]
