-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `municipio` VARCHAR(191) NOT NULL,
    `nucleos` INTEGER NOT NULL,
    `frequencia` VARCHAR(191) NOT NULL,
    `metodoEntrega` VARCHAR(191) NOT NULL,
    `enderecoEntrega` VARCHAR(191) NULL,
    `pagamento` VARCHAR(191) NOT NULL,
    `modeloPagamento` VARCHAR(191) NOT NULL,
    `restricoes` JSON NULL,
    `newsletter` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_telefone_key`(`telefone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
