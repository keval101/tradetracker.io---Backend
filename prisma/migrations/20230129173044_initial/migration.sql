BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[gainers] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [gainers_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [symbol] NVARCHAR(1000) NOT NULL,
    [previousPrice] INT NOT NULL,
    [ltp] INT NOT NULL,
    [netPrice] INT NOT NULL,
    CONSTRAINT [gainers_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[losers] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [losers_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [symbol] NVARCHAR(1000) NOT NULL,
    [previousPrice] INT NOT NULL,
    [ltp] INT NOT NULL,
    [netPrice] INT NOT NULL,
    CONSTRAINT [losers_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
