/*
  Warnings:

  - You are about to drop the column `bairro` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `enderecoEntrega` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `frequencia` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `metodoEntrega` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `modeloPagamento` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `municipio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nucleos` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pagamento` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `restricoes` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `deliveryMethod` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frequency` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `municipaly` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neibor` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentModel` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_telefone_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `bairro`,
    DROP COLUMN `enderecoEntrega`,
    DROP COLUMN `frequencia`,
    DROP COLUMN `metodoEntrega`,
    DROP COLUMN `modeloPagamento`,
    DROP COLUMN `municipio`,
    DROP COLUMN `nome`,
    DROP COLUMN `nucleos`,
    DROP COLUMN `pagamento`,
    DROP COLUMN `restricoes`,
    DROP COLUMN `senha`,
    DROP COLUMN `telefone`,
    ADD COLUMN `cautions` JSON NULL,
    ADD COLUMN `deliveryAddress` VARCHAR(191) NULL,
    ADD COLUMN `deliveryMethod` VARCHAR(191) NOT NULL,
    ADD COLUMN `frequency` VARCHAR(191) NOT NULL,
    ADD COLUMN `group` INTEGER NOT NULL,
    ADD COLUMN `municipaly` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `neibor` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `payment` VARCHAR(191) NOT NULL,
    ADD COLUMN `paymentModel` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_phone_key` ON `User`(`phone`);
