/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Land` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Land" DROP CONSTRAINT "TeamOwnedLand";

-- DropForeignKey
ALTER TABLE "Land" DROP CONSTRAINT "UserOwnedLand";

-- DropIndex
DROP INDEX "Land_ownerId_ownerType_idx";

-- AlterTable
ALTER TABLE "Land" DROP COLUMN "ownerId",
ADD COLUMN     "teamId" TEXT,
ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE INDEX "Land_userId_idx" ON "Land"("userId");

-- CreateIndex
CREATE INDEX "Land_teamId_idx" ON "Land"("teamId");

-- AddForeignKey
ALTER TABLE "Land" ADD CONSTRAINT "Land_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Land" ADD CONSTRAINT "Land_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
