/*
  Warnings:

  - The `format` column on the `Land` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `zoningStatus` column on the `Land` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "LandFormat" AS ENUM ('sale', 'lease', 'auction');

-- CreateEnum
CREATE TYPE "ZoningStatus" AS ENUM ('zoned', 'without_zoned', 'public', 'commercial');

-- AlterTable
ALTER TABLE "Land" DROP COLUMN "format",
ADD COLUMN     "format" "LandFormat" NOT NULL DEFAULT 'sale',
DROP COLUMN "zoningStatus",
ADD COLUMN     "zoningStatus" "ZoningStatus";
