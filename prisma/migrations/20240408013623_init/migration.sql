-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "ingredients" TEXT[],
    "preparation" TEXT[],
    "calories" INTEGER,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
