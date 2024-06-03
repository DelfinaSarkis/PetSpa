import { AppDataSource } from "../config/data-source";
import { Turn } from "../entities/Turn";

const TurnRepository = AppDataSource.getRepository(Turn)

export default TurnRepository