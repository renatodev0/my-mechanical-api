/*
  Warnings:

  - Added the required column `realizedDate` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fipeId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "realizedDate" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "serviceValue" DROP NOT NULL,
ALTER COLUMN "completionDeadline" DROP NOT NULL,
ALTER COLUMN "serviceStatus" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "fipeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PartChanged" (
    "id" TEXT NOT NULL,
    "partName" TEXT NOT NULL,
    "partDescription" TEXT NOT NULL,
    "partValue" DOUBLE PRECISION,
    "manufacturer" TEXT NOT NULL,
    "serviceId" TEXT,

    CONSTRAINT "PartChanged_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PartChanged" ADD CONSTRAINT "PartChanged_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;
