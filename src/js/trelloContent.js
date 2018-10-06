let trelloContent = {
  data: {
    "boards": ["Kubric UI"],
    "Kubric UI": {
      "lists": ["Backlog", "Prioritized"],
      "Backlog": {
        "cards": ["UI: Modify display listing of ads (storyboadrs) to like the vimeo videos section", "Breative Insight View"]

      },
      "Prioritized": {
        "cards": ["Language Support"]
      }
    }
  },
  updateBoard: (name, board) => {
	  trelloContent.data[name] = board;
	  return trelloContent.data
  }
};
export default trelloContent