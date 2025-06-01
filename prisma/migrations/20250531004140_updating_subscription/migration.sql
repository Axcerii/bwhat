/*
  Warnings:

  - You are about to drop the column `price` on the `boxes` table. All the data in the column will be lost.
  - Added the required column `addressId` to the `subscriptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `subscriptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `boxes` DROP COLUMN `price`;

-- AlterTable
ALTER TABLE `subscriptions` ADD COLUMN `addressId` INTEGER NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL;

-- AddForeignKey
ALTER TABLE `subscriptions` ADD CONSTRAINT `subscriptions_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `addresses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
