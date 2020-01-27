export default {
  "Erc20Token": {
    "name": "Text",
    "ticker": "Text",
    "total_supply": "u128"
  },
  "TokenBalance": "u128",
  "Discriminant": "bool",
  "VoteStage": {
    "PreVoting": "Text",
    "Commit": "Text",
    "Voting": "Text",
    "Completed": "Text"
  },
  "VoteType": {
    "Binary": "Type",
    "MultiOption": "Text",
    "RankedChoice": "Text"
  },
  "VoteRecord": {
    "id": "u64",
    "commitments": "VecAny",
    "reveals": "VecAny",
    "data": "VecAny",
    "outcomes": "Vec"
  },
  "VoteOutcome": {
    "": "VecAny"
  }
};
