export const schemaRegistoryContractAddress = "0x55D26f9ae0203EF95494AE4C170eD35f4Cf77797"

export const SchemaRegistoryAbi = [
  {
    address: "0x55D26f9ae0203EF95494AE4C170eD35f4Cf77797",
    abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "AlreadyExists",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "registerer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
              },
              {
                internalType: "contract ISchemaResolver",
                name: "resolver",
                type: "address",
              },
              {
                internalType: "bool",
                name: "revocable",
                type: "bool",
              },
              {
                internalType: "string",
                name: "schema",
                type: "string",
              },
            ],
            indexed: false,
            internalType: "struct SchemaRecord",
            name: "schema",
            type: "tuple",
          },
        ],
        name: "Registered",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        name: "getSchema",
        outputs: [
          {
            components: [
              {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
              },
              {
                internalType: "contract ISchemaResolver",
                name: "resolver",
                type: "address",
              },
              {
                internalType: "bool",
                name: "revocable",
                type: "bool",
              },
              {
                internalType: "string",
                name: "schema",
                type: "string",
              },
            ],
            internalType: "struct SchemaRecord",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "schema",
            type: "string",
          },
          {
            internalType: "contract ISchemaResolver",
            name: "resolver",
            type: "address",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
        ],
        name: "register",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "version",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    transactionHash: "0x709dbe47480752dc1da308608cd42a38c703f6559927fded229b1083683b8350",
    receipt: {
      to: null,
      from: "0x6457B4DB9575DBc1bac391DaE4B239722c4000d0",
      contractAddress: "0x55D26f9ae0203EF95494AE4C170eD35f4Cf77797",
      transactionIndex: 3,
      gasUsed: "631544",
      logsBloom:
        "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000800000000001000000000100000000000000000001000000000000000800000000000000000000000080000000000000000000000000000020000001000000000001000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000004000000000000000000001000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000100000",
      blockHash: "0xbfa6e881b8dbb04247f36f16c0eecb1412fc8ab319ffa4a8cec7f18755ca31da",
      transactionHash: "0x709dbe47480752dc1da308608cd42a38c703f6559927fded229b1083683b8350",
      logs: [
        {
          transactionIndex: 3,
          blockNumber: 41442363,
          transactionHash: "0x709dbe47480752dc1da308608cd42a38c703f6559927fded229b1083683b8350",
          address: "0x0000000000000000000000000000000000001010",
          topics: [
            "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",
            "0x0000000000000000000000000000000000000000000000000000000000001010",
            "0x0000000000000000000000006457b4db9575dbc1bac391dae4b239722c4000d0",
            "0x0000000000000000000000004cefb7df2ff89a05ddd0176de11e01ef0cf7ed84",
          ],
          data: "0x00000000000000000000000000000000000000000000000000035d9431ab88000000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000001cfc42342c34bebcc80000000000000000000000000000000000000000000000000ddd591f75b8780000000000000000000000000000000000000000000000001cfc4591c0666a44c8",
          logIndex: 4,
          blockHash: "0xbfa6e881b8dbb04247f36f16c0eecb1412fc8ab319ffa4a8cec7f18755ca31da",
        },
      ],
      blockNumber: 41442363,
      cumulativeGasUsed: "1198374",
      status: 1,
      byzantium: true,
    },
    args: [],
    numDeployments: 1,
    solcInputHash: "4815fa92859e337c29529f019e92192d",
    metadata:
      '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyExists","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"uid","type":"bytes32"},{"indexed":true,"internalType":"address","name":"registerer","type":"address"},{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"contract ISchemaResolver","name":"resolver","type":"address"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"string","name":"schema","type":"string"}],"indexed":false,"internalType":"struct SchemaRecord","name":"schema","type":"tuple"}],"name":"Registered","type":"event"},{"inputs":[{"internalType":"bytes32","name":"uid","type":"bytes32"}],"name":"getSchema","outputs":[{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"contract ISchemaResolver","name":"resolver","type":"address"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"string","name":"schema","type":"string"}],"internalType":"struct SchemaRecord","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"schema","type":"string"},{"internalType":"contract ISchemaResolver","name":"resolver","type":"address"},{"internalType":"bool","name":"revocable","type":"bool"}],"name":"register","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],"devdoc":{"events":{"Registered(bytes32,address,(bytes32,address,bool,string))":{"params":{"registerer":"The address of the account used to register the schema.","schema":"The schema data.","uid":"The schema UID."}}},"kind":"dev","methods":{"constructor":{"details":"Creates a new SchemaRegistry instance."},"getSchema(bytes32)":{"params":{"uid":"The UID of the schema to retrieve."},"returns":{"_0":"The schema data members."}},"register(string,address,bool)":{"params":{"resolver":"An optional schema resolver.","revocable":"Whether the schema allows revocations explicitly.","schema":"The schema data schema."},"returns":{"_0":"The UID of the new schema."}},"version()":{"returns":{"_0":"Semver contract version as a string."}}},"title":"SchemaRegistry","version":1},"userdoc":{"events":{"Registered(bytes32,address,(bytes32,address,bool,string))":{"notice":"Emitted when a new schema has been registered"}},"kind":"user","methods":{"getSchema(bytes32)":{"notice":"Returns an existing schema by UID"},"register(string,address,bool)":{"notice":"Submits and reserves a new schema"},"version()":{"notice":"Returns the full semver contract version."}},"notice":"The global schema registry.","version":1}},"settings":{"compilationTarget":{"contracts/SchemaRegistry.sol":"SchemaRegistry"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"none","useLiteralContent":true},"optimizer":{"enabled":true,"runs":1000000},"remappings":[]},"sources":{"@openzeppelin/contracts/utils/Strings.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/Strings.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./math/Math.sol\\";\\nimport \\"./math/SignedMath.sol\\";\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary Strings {\\n    bytes16 private constant _SYMBOLS = \\"0123456789abcdef\\";\\n    uint8 private constant _ADDRESS_LENGTH = 20;\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        unchecked {\\n            uint256 length = Math.log10(value) + 1;\\n            string memory buffer = new string(length);\\n            uint256 ptr;\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                ptr := add(buffer, add(32, length))\\n            }\\n            while (true) {\\n                ptr--;\\n                /// @solidity memory-safe-assembly\\n                assembly {\\n                    mstore8(ptr, byte(mod(value, 10), _SYMBOLS))\\n                }\\n                value /= 10;\\n                if (value == 0) break;\\n            }\\n            return buffer;\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts a `int256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(int256 value) internal pure returns (string memory) {\\n        return string(abi.encodePacked(value < 0 ? \\"-\\" : \\"\\", toString(SignedMath.abs(value))));\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        unchecked {\\n            return toHexString(value, Math.log256(value) + 1);\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\"0\\";\\n        buffer[1] = \\"x\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\"Strings: hex length insufficient\\");\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(address addr) internal pure returns (string memory) {\\n        return toHexString(uint256(uint160(addr)), _ADDRESS_LENGTH);\\n    }\\n\\n    /**\\n     * @dev Returns true if the two strings are equal.\\n     */\\n    function equal(string memory a, string memory b) internal pure returns (bool) {\\n        return keccak256(bytes(a)) == keccak256(bytes(b));\\n    }\\n}\\n","keccak256":"0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0","license":"MIT"},"@openzeppelin/contracts/utils/math/Math.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/math/Math.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Standard math utilities missing in the Solidity language.\\n */\\nlibrary Math {\\n    enum Rounding {\\n        Down, // Toward negative infinity\\n        Up, // Toward infinity\\n        Zero // Toward zero\\n    }\\n\\n    /**\\n     * @dev Returns the largest of two numbers.\\n     */\\n    function max(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a > b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two numbers.\\n     */\\n    function min(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a < b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the average of two numbers. The result is rounded towards\\n     * zero.\\n     */\\n    function average(uint256 a, uint256 b) internal pure returns (uint256) {\\n        // (a + b) / 2 can overflow.\\n        return (a & b) + (a ^ b) / 2;\\n    }\\n\\n    /**\\n     * @dev Returns the ceiling of the division of two numbers.\\n     *\\n     * This differs from standard division with `/` in that it rounds up instead\\n     * of rounding down.\\n     */\\n    function ceilDiv(uint256 a, uint256 b) internal pure returns (uint256) {\\n        // (a + b - 1) / b can overflow on addition, so we distribute.\\n        return a == 0 ? 0 : (a - 1) / b + 1;\\n    }\\n\\n    /**\\n     * @notice Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or denominator == 0\\n     * @dev Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv)\\n     * with further edits by Uniswap Labs also under MIT license.\\n     */\\n    function mulDiv(uint256 x, uint256 y, uint256 denominator) internal pure returns (uint256 result) {\\n        unchecked {\\n            // 512-bit multiply [prod1 prod0] = x * y. Compute the product mod 2^256 and mod 2^256 - 1, then use\\n            // use the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256\\n            // variables such that product = prod1 * 2^256 + prod0.\\n            uint256 prod0; // Least significant 256 bits of the product\\n            uint256 prod1; // Most significant 256 bits of the product\\n            assembly {\\n                let mm := mulmod(x, y, not(0))\\n                prod0 := mul(x, y)\\n                prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n            }\\n\\n            // Handle non-overflow cases, 256 by 256 division.\\n            if (prod1 == 0) {\\n                // Solidity will revert if denominator == 0, unlike the div opcode on its own.\\n                // The surrounding unchecked block does not change this fact.\\n                // See https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic.\\n                return prod0 / denominator;\\n            }\\n\\n            // Make sure the result is less than 2^256. Also prevents denominator == 0.\\n            require(denominator > prod1, \\"Math: mulDiv overflow\\");\\n\\n            ///////////////////////////////////////////////\\n            // 512 by 256 division.\\n            ///////////////////////////////////////////////\\n\\n            // Make division exact by subtracting the remainder from [prod1 prod0].\\n            uint256 remainder;\\n            assembly {\\n                // Compute remainder using mulmod.\\n                remainder := mulmod(x, y, denominator)\\n\\n                // Subtract 256 bit number from 512 bit number.\\n                prod1 := sub(prod1, gt(remainder, prod0))\\n                prod0 := sub(prod0, remainder)\\n            }\\n\\n            // Factor powers of two out of denominator and compute largest power of two divisor of denominator. Always >= 1.\\n            // See https://cs.stackexchange.com/q/138556/92363.\\n\\n            // Does not overflow because the denominator cannot be zero at this stage in the function.\\n            uint256 twos = denominator & (~denominator + 1);\\n            assembly {\\n                // Divide denominator by twos.\\n                denominator := div(denominator, twos)\\n\\n                // Divide [prod1 prod0] by twos.\\n                prod0 := div(prod0, twos)\\n\\n                // Flip twos such that it is 2^256 / twos. If twos is zero, then it becomes one.\\n                twos := add(div(sub(0, twos), twos), 1)\\n            }\\n\\n            // Shift in bits from prod1 into prod0.\\n            prod0 |= prod1 * twos;\\n\\n            // Invert denominator mod 2^256. Now that denominator is an odd number, it has an inverse modulo 2^256 such\\n            // that denominator * inv = 1 mod 2^256. Compute the inverse by starting with a seed that is correct for\\n            // four bits. That is, denominator * inv = 1 mod 2^4.\\n            uint256 inverse = (3 * denominator) ^ 2;\\n\\n            // Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel\'s lifting lemma, this also works\\n            // in modular arithmetic, doubling the correct bits in each step.\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^8\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^16\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^32\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^64\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^128\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^256\\n\\n            // Because the division is now exact we can divide by multiplying with the modular inverse of denominator.\\n            // This will give us the correct result modulo 2^256. Since the preconditions guarantee that the outcome is\\n            // less than 2^256, this is the final result. We don\'t need to compute the high bits of the result and prod1\\n            // is no longer required.\\n            result = prod0 * inverse;\\n            return result;\\n        }\\n    }\\n\\n    /**\\n     * @notice Calculates x * y / denominator with full precision, following the selected rounding direction.\\n     */\\n    function mulDiv(uint256 x, uint256 y, uint256 denominator, Rounding rounding) internal pure returns (uint256) {\\n        uint256 result = mulDiv(x, y, denominator);\\n        if (rounding == Rounding.Up && mulmod(x, y, denominator) > 0) {\\n            result += 1;\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Returns the square root of a number. If the number is not a perfect square, the value is rounded down.\\n     *\\n     * Inspired by Henry S. Warren, Jr.\'s \\"Hacker\'s Delight\\" (Chapter 11).\\n     */\\n    function sqrt(uint256 a) internal pure returns (uint256) {\\n        if (a == 0) {\\n            return 0;\\n        }\\n\\n        // For our first guess, we get the biggest power of 2 which is smaller than the square root of the target.\\n        //\\n        // We know that the \\"msb\\" (most significant bit) of our target number `a` is a power of 2 such that we have\\n        // `msb(a) <= a < 2*msb(a)`. This value can be written `msb(a)=2**k` with `k=log2(a)`.\\n        //\\n        // This can be rewritten `2**log2(a) <= a < 2**(log2(a) + 1)`\\n        // \\u2192 `sqrt(2**k) <= sqrt(a) < sqrt(2**(k+1))`\\n        // \\u2192 `2**(k/2) <= sqrt(a) < 2**((k+1)/2) <= 2**(k/2 + 1)`\\n        //\\n        // Consequently, `2**(log2(a) / 2)` is a good first approximation of `sqrt(a)` with at least 1 correct bit.\\n        uint256 result = 1 << (log2(a) >> 1);\\n\\n        // At this point `result` is an estimation with one bit of precision. We know the true value is a uint128,\\n        // since it is the square root of a uint256. Newton\'s method converges quadratically (precision doubles at\\n        // every iteration). We thus need at most 7 iteration to turn our partial result with one bit of precision\\n        // into the expected uint128 result.\\n        unchecked {\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            return min(result, a / result);\\n        }\\n    }\\n\\n    /**\\n     * @notice Calculates sqrt(a), following the selected rounding direction.\\n     */\\n    function sqrt(uint256 a, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = sqrt(a);\\n            return result + (rounding == Rounding.Up && result * result < a ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 2, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log2(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >> 128 > 0) {\\n                value >>= 128;\\n                result += 128;\\n            }\\n            if (value >> 64 > 0) {\\n                value >>= 64;\\n                result += 64;\\n            }\\n            if (value >> 32 > 0) {\\n                value >>= 32;\\n                result += 32;\\n            }\\n            if (value >> 16 > 0) {\\n                value >>= 16;\\n                result += 16;\\n            }\\n            if (value >> 8 > 0) {\\n                value >>= 8;\\n                result += 8;\\n            }\\n            if (value >> 4 > 0) {\\n                value >>= 4;\\n                result += 4;\\n            }\\n            if (value >> 2 > 0) {\\n                value >>= 2;\\n                result += 2;\\n            }\\n            if (value >> 1 > 0) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 2, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log2(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log2(value);\\n            return result + (rounding == Rounding.Up && 1 << result < value ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log10(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >= 10 ** 64) {\\n                value /= 10 ** 64;\\n                result += 64;\\n            }\\n            if (value >= 10 ** 32) {\\n                value /= 10 ** 32;\\n                result += 32;\\n            }\\n            if (value >= 10 ** 16) {\\n                value /= 10 ** 16;\\n                result += 16;\\n            }\\n            if (value >= 10 ** 8) {\\n                value /= 10 ** 8;\\n                result += 8;\\n            }\\n            if (value >= 10 ** 4) {\\n                value /= 10 ** 4;\\n                result += 4;\\n            }\\n            if (value >= 10 ** 2) {\\n                value /= 10 ** 2;\\n                result += 2;\\n            }\\n            if (value >= 10 ** 1) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log10(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log10(value);\\n            return result + (rounding == Rounding.Up && 10 ** result < value ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 256, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     *\\n     * Adding one to the result gives the number of pairs of hex symbols needed to represent `value` as a hex string.\\n     */\\n    function log256(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >> 128 > 0) {\\n                value >>= 128;\\n                result += 16;\\n            }\\n            if (value >> 64 > 0) {\\n                value >>= 64;\\n                result += 8;\\n            }\\n            if (value >> 32 > 0) {\\n                value >>= 32;\\n                result += 4;\\n            }\\n            if (value >> 16 > 0) {\\n                value >>= 16;\\n                result += 2;\\n            }\\n            if (value >> 8 > 0) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 256, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log256(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log256(value);\\n            return result + (rounding == Rounding.Up && 1 << (result << 3) < value ? 1 : 0);\\n        }\\n    }\\n}\\n","keccak256":"0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3","license":"MIT"},"@openzeppelin/contracts/utils/math/SignedMath.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/math/SignedMath.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Standard signed math utilities missing in the Solidity language.\\n */\\nlibrary SignedMath {\\n    /**\\n     * @dev Returns the largest of two signed numbers.\\n     */\\n    function max(int256 a, int256 b) internal pure returns (int256) {\\n        return a > b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two signed numbers.\\n     */\\n    function min(int256 a, int256 b) internal pure returns (int256) {\\n        return a < b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the average of two signed numbers without overflow.\\n     * The result is rounded towards zero.\\n     */\\n    function average(int256 a, int256 b) internal pure returns (int256) {\\n        // Formula from the book \\"Hacker\'s Delight\\"\\n        int256 x = (a & b) + ((a ^ b) >> 1);\\n        return x + (int256(uint256(x) >> 255) & (a ^ b));\\n    }\\n\\n    /**\\n     * @dev Returns the absolute unsigned value of a signed value.\\n     */\\n    function abs(int256 n) internal pure returns (uint256) {\\n        unchecked {\\n            // must be unchecked in order to support `n = type(int256).min`\\n            return uint256(n >= 0 ? n : -n);\\n        }\\n    }\\n}\\n","keccak256":"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc","license":"MIT"},"contracts/Common.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n// A representation of an empty/uninitialized UID.\\nbytes32 constant EMPTY_UID = 0;\\n\\n// A zero expiration represents an non-expiring attestation.\\nuint64 constant NO_EXPIRATION_TIME = 0;\\n\\nerror AccessDenied();\\nerror DeadlineExpired();\\nerror InvalidEAS();\\nerror InvalidLength();\\nerror InvalidSignature();\\nerror NotFound();\\n\\n/// @notice A struct representing ECDSA signature data.\\nstruct Signature {\\n    uint8 v; // The recovery ID.\\n    bytes32 r; // The x-coordinate of the nonce R.\\n    bytes32 s; // The signature data.\\n}\\n\\n/// @notice A struct representing a single attestation.\\nstruct Attestation {\\n    bytes32 uid; // A unique identifier of the attestation.\\n    bytes32 schema; // The unique identifier of the schema.\\n    uint64 time; // The time when the attestation was created (Unix timestamp).\\n    uint64 expirationTime; // The time when the attestation expires (Unix timestamp).\\n    uint64 revocationTime; // The time when the attestation was revoked (Unix timestamp).\\n    bytes32 refUID; // The UID of the related attestation.\\n    address recipient; // The recipient of the attestation.\\n    address attester; // The attester/sender of the attestation.\\n    bool revocable; // Whether the attestation is revocable.\\n    bytes data; // Custom attestation data.\\n}\\n\\n/// @notice A helper function to work with unchecked iterators in loops.\\nfunction uncheckedInc(uint256 i) pure returns (uint256 j) {\\n    unchecked {\\n        j = i + 1;\\n    }\\n}\\n","keccak256":"0x957bd2e6d0d6d637f86208b135c29fbaf4412cb08e5e7a61ede16b80561bf685","license":"MIT"},"contracts/ISchemaRegistry.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport { ISchemaResolver } from \\"./resolver/ISchemaResolver.sol\\";\\n\\n/// @notice A struct representing a record for a submitted schema.\\nstruct SchemaRecord {\\n    bytes32 uid; // The unique identifier of the schema.\\n    ISchemaResolver resolver; // Optional schema resolver.\\n    bool revocable; // Whether the schema allows revocations explicitly.\\n    string schema; // Custom specification of the schema (e.g., an ABI).\\n}\\n\\n/// @title ISchemaRegistry\\n/// @notice The interface of global attestation schemas for the Ethereum Attestation Service protocol.\\ninterface ISchemaRegistry {\\n    /// @notice Emitted when a new schema has been registered\\n    /// @param uid The schema UID.\\n    /// @param registerer The address of the account used to register the schema.\\n    /// @param schema The schema data.\\n    event Registered(bytes32 indexed uid, address indexed registerer, SchemaRecord schema);\\n\\n    /// @notice Submits and reserves a new schema\\n    /// @param schema The schema data schema.\\n    /// @param resolver An optional schema resolver.\\n    /// @param revocable Whether the schema allows revocations explicitly.\\n    /// @return The UID of the new schema.\\n    function register(string calldata schema, ISchemaResolver resolver, bool revocable) external returns (bytes32);\\n\\n    /// @notice Returns an existing schema by UID\\n    /// @param uid The UID of the schema to retrieve.\\n    /// @return The schema data members.\\n    function getSchema(bytes32 uid) external view returns (SchemaRecord memory);\\n}\\n","keccak256":"0x772b1ebcf3e5c93fecb53762e11bbdae75fcb667deea4ac21134fccfe78326e4","license":"MIT"},"contracts/SchemaRegistry.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity 0.8.19;\\n\\nimport { ISchemaResolver } from \\"./resolver/ISchemaResolver.sol\\";\\n\\nimport { EMPTY_UID } from \\"./Common.sol\\";\\nimport { Semver } from \\"./Semver.sol\\";\\nimport { ISchemaRegistry, SchemaRecord } from \\"./ISchemaRegistry.sol\\";\\n\\n/// @title SchemaRegistry\\n/// @notice The global schema registry.\\ncontract SchemaRegistry is ISchemaRegistry, Semver {\\n    error AlreadyExists();\\n\\n    // The global mapping between schema records and their IDs.\\n    mapping(bytes32 uid => SchemaRecord schemaRecord) private _registry;\\n\\n    /// @dev Creates a new SchemaRegistry instance.\\n    constructor() Semver(1, 2, 0) {}\\n\\n    /// @inheritdoc ISchemaRegistry\\n    function register(string calldata schema, ISchemaResolver resolver, bool revocable) external returns (bytes32) {\\n        SchemaRecord memory schemaRecord = SchemaRecord({\\n            uid: EMPTY_UID,\\n            schema: schema,\\n            resolver: resolver,\\n            revocable: revocable\\n        });\\n\\n        bytes32 uid = _getUID(schemaRecord);\\n        if (_registry[uid].uid != EMPTY_UID) {\\n            revert AlreadyExists();\\n        }\\n\\n        schemaRecord.uid = uid;\\n        _registry[uid] = schemaRecord;\\n\\n        emit Registered(uid, msg.sender, schemaRecord);\\n\\n        return uid;\\n    }\\n\\n    /// @inheritdoc ISchemaRegistry\\n    function getSchema(bytes32 uid) external view returns (SchemaRecord memory) {\\n        return _registry[uid];\\n    }\\n\\n    /// @dev Calculates a UID for a given schema.\\n    /// @param schemaRecord The input schema.\\n    /// @return schema UID.\\n    function _getUID(SchemaRecord memory schemaRecord) private pure returns (bytes32) {\\n        return keccak256(abi.encodePacked(schemaRecord.schema, schemaRecord.resolver, schemaRecord.revocable));\\n    }\\n}\\n","keccak256":"0xcb0f2a8edb56bc5bba9d81d7501f3911c257e8dcf905ea7428e37a45c441d901","license":"MIT"},"contracts/Semver.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.4;\\n\\nimport { Strings } from \\"@openzeppelin/contracts/utils/Strings.sol\\";\\n\\n/// @title Semver\\n/// @notice A simple contract for managing contract versions.\\ncontract Semver {\\n    // Contract\'s major version number.\\n    uint256 private immutable _major;\\n\\n    // Contract\'s minor version number.\\n    uint256 private immutable _minor;\\n\\n    // Contract\'s patch version number.\\n    uint256 private immutable _path;\\n\\n    /// @dev Create a new Semver instance.\\n    /// @param major Major version number.\\n    /// @param minor Minor version number.\\n    /// @param patch Patch version number.\\n    constructor(uint256 major, uint256 minor, uint256 patch) {\\n        _major = major;\\n        _minor = minor;\\n        _path = patch;\\n    }\\n\\n    /// @notice Returns the full semver contract version.\\n    /// @return Semver contract version as a string.\\n    function version() external view returns (string memory) {\\n        return\\n            string(\\n                abi.encodePacked(Strings.toString(_major), \\".\\", Strings.toString(_minor), \\".\\", Strings.toString(_path))\\n            );\\n    }\\n}\\n","keccak256":"0x5883c852730b00d73b10475f3b382afce8f30b89f337078ec03a66c463e048a8","license":"MIT"},"contracts/resolver/ISchemaResolver.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport { Attestation } from \\"../Common.sol\\";\\n\\n/// @title ISchemaResolver\\n/// @notice The interface of an optional schema resolver.\\ninterface ISchemaResolver {\\n    /// @notice Checks if the resolver can be sent ETH.\\n    /// @return Whether the resolver supports ETH transfers.\\n    function isPayable() external pure returns (bool);\\n\\n    /// @notice Processes an attestation and verifies whether it\'s valid.\\n    /// @param attestation The new attestation.\\n    /// @return Whether the attestation is valid.\\n    function attest(Attestation calldata attestation) external payable returns (bool);\\n\\n    /// @notice Processes multiple attestations and verifies whether they are valid.\\n    /// @param attestations The new attestations.\\n    /// @param values Explicit ETH amounts which were sent with each attestation.\\n    /// @return Whether all the attestations are valid.\\n    function multiAttest(\\n        Attestation[] calldata attestations,\\n        uint256[] calldata values\\n    ) external payable returns (bool);\\n\\n    /// @notice Processes an attestation revocation and verifies if it can be revoked.\\n    /// @param attestation The existing attestation to be revoked.\\n    /// @return Whether the attestation can be revoked.\\n    function revoke(Attestation calldata attestation) external payable returns (bool);\\n\\n    /// @notice Processes revocation of multiple attestation and verifies they can be revoked.\\n    /// @param attestations The existing attestations to be revoked.\\n    /// @param values Explicit ETH amounts which were sent with each revocation.\\n    /// @return Whether the attestations can be revoked.\\n    function multiRevoke(\\n        Attestation[] calldata attestations,\\n        uint256[] calldata values\\n    ) external payable returns (bool);\\n}\\n","keccak256":"0xb74b64e20b90b35004750d2c78ceb114a304975d22d71bd9a2a9de0d483f0395","license":"MIT"}},"version":1}',
    bytecode:
      "0x60e060405234801561001057600080fd5b506001608052600260a052600060c05260805160a05160c051610a8461004c600039600060fe0152600060d50152600060ac0152610a846000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806354fd4d501461004657806360d7a27814610064578063a2ea7c6e14610085575b600080fd5b61004e6100a5565b60405161005b9190610683565b60405180910390f35b61007761007236600461069d565b610148565b60405190815260200161005b565b61009861009336600461074f565b61030c565b60405161005b9190610768565b60606100d07f0000000000000000000000000000000000000000000000000000000000000000610434565b6100f97f0000000000000000000000000000000000000000000000000000000000000000610434565b6101227f0000000000000000000000000000000000000000000000000000000000000000610434565b604051602001610134939291906107c1565b604051602081830303815290604052905090565b60008060405180608001604052806000801b81526020018573ffffffffffffffffffffffffffffffffffffffff168152602001841515815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250939094525092935091506101ca9050826104f2565b60008181526020819052604090205490915015610213576040517f23369fa600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80825260008181526020818152604091829020845181559084015160018201805493860151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00000000000000000000000000000000000000000090941673ffffffffffffffffffffffffffffffffffffffff9092169190911792909217909155606083015183919060028201906102af9082610908565b509050503373ffffffffffffffffffffffffffffffffffffffff16817fd0b86852e21f9e5fa4bc3b0cff9757ffe243d50c4b43968a42202153d651ea5e846040516102fa9190610768565b60405180910390a39695505050505050565b604080516080810182526000808252602082018190529181019190915260608082015260008281526020818152604091829020825160808101845281548152600182015473ffffffffffffffffffffffffffffffffffffffff8116938201939093527401000000000000000000000000000000000000000090920460ff161515928201929092526002820180549192916060840191906103ab90610866565b80601f01602080910402602001604051908101604052809291908181526020018280546103d790610866565b80156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050815250509050919050565b6060600061044183610532565b600101905060008167ffffffffffffffff81111561046157610461610837565b6040519080825280601f01601f19166020018201604052801561048b576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461049557509392505050565b600081606001518260200151836040015160405160200161051593929190610a22565b604051602081830303815290604052805190602001209050919050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061057b577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106105a7576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106105c557662386f26fc10000830492506010015b6305f5e10083106105dd576305f5e100830492506008015b61271083106105f157612710830492506004015b60648310610603576064830492506002015b600a831061060f576001015b92915050565b60005b83811015610630578181015183820152602001610618565b50506000910152565b60008151808452610651816020860160208601610615565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006106966020830184610639565b9392505050565b600080600080606085870312156106b357600080fd5b843567ffffffffffffffff808211156106cb57600080fd5b818701915087601f8301126106df57600080fd5b8135818111156106ee57600080fd5b88602082850101111561070057600080fd5b6020928301965094505085013573ffffffffffffffffffffffffffffffffffffffff8116811461072f57600080fd5b91506040850135801515811461074457600080fd5b939692955090935050565b60006020828403121561076157600080fd5b5035919050565b602081528151602082015273ffffffffffffffffffffffffffffffffffffffff6020830151166040820152604082015115156060820152600060608301516080808401526107b960a0840182610639565b949350505050565b600084516107d3818460208901610615565b80830190507f2e00000000000000000000000000000000000000000000000000000000000000808252855161080f816001850160208a01610615565b6001920191820152835161082a816002840160208801610615565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c9082168061087a57607f821691505b6020821081036108b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561090357600081815260208120601f850160051c810160208610156108e05750805b601f850160051c820191505b818110156108ff578281556001016108ec565b5050505b505050565b815167ffffffffffffffff81111561092257610922610837565b610936816109308454610866565b846108b9565b602080601f83116001811461098957600084156109535750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556108ff565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156109d6578886015182559484019460019091019084016109b7565b5085821015610a1257878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60008451610a34818460208901610615565b60609490941b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169190930190815290151560f81b60148201526015019291505056fea164736f6c6343000813000a",
    deployedBytecode:
      "0x608060405234801561001057600080fd5b50600436106100415760003560e01c806354fd4d501461004657806360d7a27814610064578063a2ea7c6e14610085575b600080fd5b61004e6100a5565b60405161005b9190610683565b60405180910390f35b61007761007236600461069d565b610148565b60405190815260200161005b565b61009861009336600461074f565b61030c565b60405161005b9190610768565b60606100d07f0000000000000000000000000000000000000000000000000000000000000000610434565b6100f97f0000000000000000000000000000000000000000000000000000000000000000610434565b6101227f0000000000000000000000000000000000000000000000000000000000000000610434565b604051602001610134939291906107c1565b604051602081830303815290604052905090565b60008060405180608001604052806000801b81526020018573ffffffffffffffffffffffffffffffffffffffff168152602001841515815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250939094525092935091506101ca9050826104f2565b60008181526020819052604090205490915015610213576040517f23369fa600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80825260008181526020818152604091829020845181559084015160018201805493860151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00000000000000000000000000000000000000000090941673ffffffffffffffffffffffffffffffffffffffff9092169190911792909217909155606083015183919060028201906102af9082610908565b509050503373ffffffffffffffffffffffffffffffffffffffff16817fd0b86852e21f9e5fa4bc3b0cff9757ffe243d50c4b43968a42202153d651ea5e846040516102fa9190610768565b60405180910390a39695505050505050565b604080516080810182526000808252602082018190529181019190915260608082015260008281526020818152604091829020825160808101845281548152600182015473ffffffffffffffffffffffffffffffffffffffff8116938201939093527401000000000000000000000000000000000000000090920460ff161515928201929092526002820180549192916060840191906103ab90610866565b80601f01602080910402602001604051908101604052809291908181526020018280546103d790610866565b80156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050815250509050919050565b6060600061044183610532565b600101905060008167ffffffffffffffff81111561046157610461610837565b6040519080825280601f01601f19166020018201604052801561048b576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461049557509392505050565b600081606001518260200151836040015160405160200161051593929190610a22565b604051602081830303815290604052805190602001209050919050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061057b577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106105a7576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106105c557662386f26fc10000830492506010015b6305f5e10083106105dd576305f5e100830492506008015b61271083106105f157612710830492506004015b60648310610603576064830492506002015b600a831061060f576001015b92915050565b60005b83811015610630578181015183820152602001610618565b50506000910152565b60008151808452610651816020860160208601610615565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006106966020830184610639565b9392505050565b600080600080606085870312156106b357600080fd5b843567ffffffffffffffff808211156106cb57600080fd5b818701915087601f8301126106df57600080fd5b8135818111156106ee57600080fd5b88602082850101111561070057600080fd5b6020928301965094505085013573ffffffffffffffffffffffffffffffffffffffff8116811461072f57600080fd5b91506040850135801515811461074457600080fd5b939692955090935050565b60006020828403121561076157600080fd5b5035919050565b602081528151602082015273ffffffffffffffffffffffffffffffffffffffff6020830151166040820152604082015115156060820152600060608301516080808401526107b960a0840182610639565b949350505050565b600084516107d3818460208901610615565b80830190507f2e00000000000000000000000000000000000000000000000000000000000000808252855161080f816001850160208a01610615565b6001920191820152835161082a816002840160208801610615565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c9082168061087a57607f821691505b6020821081036108b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561090357600081815260208120601f850160051c810160208610156108e05750805b601f850160051c820191505b818110156108ff578281556001016108ec565b5050505b505050565b815167ffffffffffffffff81111561092257610922610837565b610936816109308454610866565b846108b9565b602080601f83116001811461098957600084156109535750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556108ff565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156109d6578886015182559484019460019091019084016109b7565b5085821015610a1257878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60008451610a34818460208901610615565b60609490941b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169190930190815290151560f81b60148201526015019291505056fea164736f6c6343000813000a",
    devdoc: {
      events: {
        "Registered(bytes32,address,(bytes32,address,bool,string))": {
          params: {
            registerer: "The address of the account used to register the schema.",
            schema: "The schema data.",
            uid: "The schema UID.",
          },
        },
      },
      kind: "dev",
      methods: {
        constructor: {
          details: "Creates a new SchemaRegistry instance.",
        },
        "getSchema(bytes32)": {
          params: {
            uid: "The UID of the schema to retrieve.",
          },
          returns: {
            _0: "The schema data members.",
          },
        },
        "register(string,address,bool)": {
          params: {
            resolver: "An optional schema resolver.",
            revocable: "Whether the schema allows revocations explicitly.",
            schema: "The schema data schema.",
          },
          returns: {
            _0: "The UID of the new schema.",
          },
        },
        "version()": {
          returns: {
            _0: "Semver contract version as a string.",
          },
        },
      },
      title: "SchemaRegistry",
      version: 1,
    },
    userdoc: {
      events: {
        "Registered(bytes32,address,(bytes32,address,bool,string))": {
          notice: "Emitted when a new schema has been registered",
        },
      },
      kind: "user",
      methods: {
        "getSchema(bytes32)": {
          notice: "Returns an existing schema by UID",
        },
        "register(string,address,bool)": {
          notice: "Submits and reserves a new schema",
        },
        "version()": {
          notice: "Returns the full semver contract version.",
        },
      },
      notice: "The global schema registry.",
      version: 1,
    },
    storageLayout: {
      storage: [
        {
          astId: 6182,
          contract: "contracts/SchemaRegistry.sol:SchemaRegistry",
          label: "_registry",
          offset: 0,
          slot: "0",
          type: "t_mapping(t_bytes32,t_struct(SchemaRecord)6125_storage)",
        },
      ],
      types: {
        t_bool: {
          encoding: "inplace",
          label: "bool",
          numberOfBytes: "1",
        },
        t_bytes32: {
          encoding: "inplace",
          label: "bytes32",
          numberOfBytes: "32",
        },
        "t_contract(ISchemaResolver)7768": {
          encoding: "inplace",
          label: "contract ISchemaResolver",
          numberOfBytes: "20",
        },
        "t_mapping(t_bytes32,t_struct(SchemaRecord)6125_storage)": {
          encoding: "mapping",
          key: "t_bytes32",
          label: "mapping(bytes32 => struct SchemaRecord)",
          numberOfBytes: "32",
          value: "t_struct(SchemaRecord)6125_storage",
        },
        t_string_storage: {
          encoding: "bytes",
          label: "string",
          numberOfBytes: "32",
        },
        "t_struct(SchemaRecord)6125_storage": {
          encoding: "inplace",
          label: "struct SchemaRecord",
          members: [
            {
              astId: 6117,
              contract: "contracts/SchemaRegistry.sol:SchemaRegistry",
              label: "uid",
              offset: 0,
              slot: "0",
              type: "t_bytes32",
            },
            {
              astId: 6120,
              contract: "contracts/SchemaRegistry.sol:SchemaRegistry",
              label: "resolver",
              offset: 0,
              slot: "1",
              type: "t_contract(ISchemaResolver)7768",
            },
            {
              astId: 6122,
              contract: "contracts/SchemaRegistry.sol:SchemaRegistry",
              label: "revocable",
              offset: 20,
              slot: "1",
              type: "t_bool",
            },
            {
              astId: 6124,
              contract: "contracts/SchemaRegistry.sol:SchemaRegistry",
              label: "schema",
              offset: 0,
              slot: "2",
              type: "t_string_storage",
            },
          ],
          numberOfBytes: "96",
        },
      },
    },
  },
]
