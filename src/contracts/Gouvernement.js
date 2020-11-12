
export const Gouvernement_address = '0x4F36Ac8C9Dd32030Ccad6Fda24Efe3e272a765F5'

export const Gouvernement_abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_age",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_job",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "_walletAdrress",
                "type": "address"
            }
        ],
        "name": "Register",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "citoyens",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "job",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "walletAdrress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
