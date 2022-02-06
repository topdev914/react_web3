const supportedChartTokens = [
    {
        description: 'TOPIA/BNB',
        exchange: 'Utopia',
        full_name: 'TOPIA/BNB',
        symbol: 'TOPIA/BNB',
        type: 'crypto',
        address: '0x391748379827340DB2daFFC845AC6Cffad431B50',
        pricescale: 10 ** 9,
    },
    {
        description: 'CAKE/BNB',
        exchange: 'Utopia',
        full_name: 'CAKE/BNB',
        symbol: 'CAKE/BNB',
        type: 'crypto',
        address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
        pricescale: 10 ** 9,
    },
    {
        description: 'BAKE/BNB',
        exchange: 'Utopia',
        full_name: 'BAKE/BNB',
        symbol: 'BAKE/BNB',
        type: 'crypto',
        address: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
        pricescale: 10 ** 9,
    },
    {
        description: 'SAFEMOON/BNB',
        exchange: 'Utopia',
        full_name: 'SAFEMOON/BNB',
        symbol: 'SAFEMOON/BNB',
        type: 'crypto',
        address: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
        pricescale: 10 ** 12,
    },
    {
        description: 'COIN98/BNB',
        exchange: 'Utopia',
        full_name: 'COIN98/BNB',
        symbol: 'COIN98/BNB',
        type: 'crypto',
        address: '0xaec945e04baf28b135fa7c640f624f8d90f1c3a6',
        pricescale: 10 ** 9,
    },
    {
        description: '1INCH/BNB',
        exchange: 'Utopia',
        full_name: '1INCH/BNB',
        symbol: '1INCH/BNB',
        type: 'crypto',
        address: '0x111111111117dc0aa78b770fa6a738034120c302',
        pricescale: 10 ** 9,
    },
    {
        description: 'SMASH/BNB',
        exchange: 'Utopia',
        full_name: 'SMASH/BNB',
        symbol: 'SMASH/BNB',
        type: 'crypto',
        address: '0x3D0e93bfCb8FB46331Ea8c98B6ab8C575aB424C3',
        pricescale: 10 ** 9,
    },
    {
        description: 'MOONLIGHT/BNB',
        exchange: 'Utopia',
        full_name: 'MOONLIGHT/BNB',
        symbol: 'MOONLIGHT/BNB',
        type: 'crypto',
        address: '0xb1ced2e320e3f4c8e3511b1dc59203303493f382',
        pricescale: 10 ** 12,
    },
    {
        description: 'ONT/BNB',
        exchange: 'Utopia',
        full_name: 'ONT/BNB',
        symbol: 'ONT/BNB',
        type: 'crypto',
        address: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
        pricescale: 10 ** 9,
    },
    {
        description: 'SXP/BNB',
        exchange: 'Utopia',
        full_name: 'SXP/BNB',
        symbol: 'SXP/BNB',
        type: 'crypto',
        address: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
        pricescale: 10 ** 9,
    },
    {
        description: 'ETH/BNB',
        exchange: 'Utopia',
        full_name: 'ETH/BNB',
        symbol: 'ETH/BNB',
        type: 'crypto',
        address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        pricescale: 10 ** 9,
    },
    {
        description: 'BTCB/BNB',
        exchange: 'Utopia',
        full_name: 'BTCB/BNB',
        symbol: 'BTCB/BNB',
        type: 'crypto',
        address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        pricescale: 10 ** 9,
    },
    {
        description: 'BUSD/BNB',
        exchange: 'Utopia',
        full_name: 'BUSD/BNB',
        symbol: 'BUSD/BNB',
        type: 'crypto',
        address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        pricescale: 10 ** 9,
    },
    {
        description: 'USDT/BNB',
        exchange: 'Utopia',
        full_name: 'USDT/BNB',
        symbol: 'USDT/BNB',
        type: 'crypto',
        address: '0x55d398326f99059ff775485246999027b3197955',
        pricescale: 10 ** 9,
    },
    {
        description: 'XVS/BNB',
        exchange: 'Utopia',
        full_name: 'XVS/BNB',
        symbol: 'XVS/BNB',
        type: 'crypto',
        address: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
        pricescale: 10 ** 9,
    },
    {
        description: 'VAI/BNB',
        exchange: 'Utopia',
        full_name: 'VAI/BNB',
        symbol: 'VAI/BNB',
        type: 'crypto',
        address: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
        pricescale: 10 ** 9,
    },
    {
        description: 'VETTER/BNB',
        exchange: 'Utopia',
        full_name: 'VETTER/BNB',
        symbol: 'VETTER/BNB',
        type: 'crypto',
        address: '0x6169b3b23e57de79a6146a2170980ceb1f83b9e0',
        pricescale: 10 ** 12,
    },
    {
        description: 'SSB/BNB',
        exchange: 'Utopia',
        full_name: 'SSB/BNB',
        symbol: 'SSB/BNB',
        type: 'crypto',
        address: '0x55b53855eae06c4744841dbfa06fce335db4355b',
        pricescale: 10 ** 12,
    },
    {
        description: 'CRYPT/BNB',
        exchange: 'Utopia',
        full_name: 'CRYPT/BNB',
        symbol: 'CRYPT/BNB',
        type: 'crypto',
        address: '0xda6802bbec06ab447a68294a63de47ed4506acaa',
        pricescale: 10 ** 12,
    },
]

export default supportedChartTokens