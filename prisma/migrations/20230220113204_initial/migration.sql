BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [users_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [hash] NVARCHAR(1000) NOT NULL,
    [firstName] NVARCHAR(1000),
    [lastName] NVARCHAR(1000),
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[gainers] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [gainers_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [symbol] NVARCHAR(1000) NOT NULL,
    [previousPrice] FLOAT(53) NOT NULL,
    [ltp] FLOAT(53) NOT NULL,
    [netPrice] FLOAT(53) NOT NULL,
    CONSTRAINT [gainers_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[losers] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [losers_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [symbol] NVARCHAR(1000) NOT NULL,
    [previousPrice] FLOAT(53) NOT NULL,
    [ltp] FLOAT(53) NOT NULL,
    [netPrice] FLOAT(53) NOT NULL,
    CONSTRAINT [losers_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[trades] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [trades_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [index] NVARCHAR(1000) NOT NULL,
    [stickerPrice] INT NOT NULL,
    [quantity] INT NOT NULL,
    [average] INT NOT NULL,
    [totalAmount] INT NOT NULL,
    [userId] INT NOT NULL,
    CONSTRAINT [trades_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[trades] ADD CONSTRAINT [trades_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
