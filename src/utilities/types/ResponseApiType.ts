import { UserMongo } from "@/schemas/authSchemas";
import { ClientMongo } from "@/schemas/clientSchemas";
import { PaymentMongo } from "@/schemas/paymentSchema";
import { ProductMongo } from "@/schemas/productSchema";
import { ReportMongo } from "@/schemas/reportSchema";
import { SaleMongo } from "@/schemas/saleSchema";

export type ResponseApiType = UserMongo | ClientMongo | ProductMongo | SaleMongo | PaymentMongo | ReportMongo | SaleMongo