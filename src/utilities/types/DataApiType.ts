import { UserRegister } from "@/schemas/authSchemas";
import { ClientRegister } from "@/schemas/clientSchemas";
import { OrderListRegister } from "@/schemas/orderListSchema";
import { PaymentRegister } from "@/schemas/paymentSchema";
import { ProductRegister } from "@/schemas/productSchema";
import { ReportRegister } from "@/schemas/reportSchema";
import { SaleRegister } from "@/schemas/saleSchema";

export type DataApiType = UserRegister | ClientRegister | PaymentRegister | SaleRegister | ProductRegister | OrderListRegister | ReportRegister