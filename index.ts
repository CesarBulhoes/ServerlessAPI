export const handler = async (event) => {
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go 2!",
        input: event,
      },
      null,
      2
    ),
  };
};
