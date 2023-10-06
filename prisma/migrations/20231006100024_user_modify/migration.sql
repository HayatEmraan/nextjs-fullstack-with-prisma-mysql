/*
  Warnings:

  - You are about to drop the `completed` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "completed" DROP CONSTRAINT "completed_todoID_fkey";

-- DropForeignKey
ALTER TABLE "completed" DROP CONSTRAINT "completed_userID_fkey";

-- AlterTable
ALTER TABLE "todo" ADD COLUMN     "isComplete" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "completed";

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
