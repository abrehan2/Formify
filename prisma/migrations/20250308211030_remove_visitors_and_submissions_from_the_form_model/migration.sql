/*
  Warnings:

  - You are about to drop the column `submissions` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the column `visits` on the `Form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "submissions",
DROP COLUMN "visits";
