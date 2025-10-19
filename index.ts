import app from "./src/app";
import { connectToDB } from "./src/config/mongoose";

connectToDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${PORT}`);
  /* eslint-enable no-console */
});
