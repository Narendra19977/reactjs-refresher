const styles = {
    todoListContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      width: "60%",
      maxWidth: "80%",
      padding: 0,
      minWidth:"430px"
    },
    todoListItem: {
      backgroundColor: "#fff",
      padding: "12px 16px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    todoListButton: {
      backgroundColor: "#ff4d4f",
      color: "white",
      border: "none",
      borderRadius: "6px",
      padding: "6px 12px",
      cursor: "pointer",
      fontSize: "14px",
    },
    todoListText: { fontSize: "24px", color: "#333" },
  };
  export { styles };
  