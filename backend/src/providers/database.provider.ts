import { Provider } from "@/contracts/provider";
import mongoose from "mongoose";

export default class DatabaseServiceProvider implements Provider {
  async register() {
    try {
      await mongoose.connect(process.env.DATABASE_URL);
    } catch (error) {
      console.log(error);
    }
  }
}
