import { Router } from "express";
import { methods as bookControllers} from "./../controllers/product.controller";

const router = Router();

router.get("/", bookControllers.getBooks);
router.get("/:id", bookControllers.getBook);
router.post("/", bookControllers.createBook);
router.put("/:id", bookControllers.updateBook);
router.delete("/:id", bookControllers.deleteBook);

export default router;