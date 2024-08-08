/*
  Warnings:

  - You are about to drop the `LandLandType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LandTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LandLandType" DROP CONSTRAINT "LandLandType_landId_fkey";

-- DropForeignKey
ALTER TABLE "LandLandType" DROP CONSTRAINT "LandLandType_landTypeId_fkey";

-- DropForeignKey
ALTER TABLE "LandTag" DROP CONSTRAINT "LandTag_landId_fkey";

-- DropForeignKey
ALTER TABLE "LandTag" DROP CONSTRAINT "LandTag_tagId_fkey";

-- DropTable
DROP TABLE "LandLandType";

-- DropTable
DROP TABLE "LandTag";

-- CreateTable
CREATE TABLE "_LandToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LandToLandType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LandToTag_AB_unique" ON "_LandToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_LandToTag_B_index" ON "_LandToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LandToLandType_AB_unique" ON "_LandToLandType"("A", "B");

-- CreateIndex
CREATE INDEX "_LandToLandType_B_index" ON "_LandToLandType"("B");

-- AddForeignKey
ALTER TABLE "_LandToTag" ADD CONSTRAINT "_LandToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Land"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LandToTag" ADD CONSTRAINT "_LandToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LandToLandType" ADD CONSTRAINT "_LandToLandType_A_fkey" FOREIGN KEY ("A") REFERENCES "Land"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LandToLandType" ADD CONSTRAINT "_LandToLandType_B_fkey" FOREIGN KEY ("B") REFERENCES "LandType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
