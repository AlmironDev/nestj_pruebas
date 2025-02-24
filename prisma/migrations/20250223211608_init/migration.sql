/*
  Warnings:

  - You are about to drop the column `email` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Tasks_email_key";

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";
