export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.email || !body.message) {
    return res
      .status(400)
      .json(
        "Error Occured! - The API didn't receive any 'email' or 'message'."
      );
  }

  // Found the name.
  // Sends a HTTP success code
  /*
  res.status(200).json({
    data: {
      email: `${body.email}`,
      message: `${body.message}`,
    },
  });
  */
}
