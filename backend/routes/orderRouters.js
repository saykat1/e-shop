import express from 'express'
import { addOrder } from '../controller/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()
router.route('/').post(protect, addOrder)

export default router