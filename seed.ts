const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Criar Usuários
  const instructor = await prisma.user.create({
    data: {
      name: "Carlos Pereira",
      email: "carlos@example.com",
      password: "senhaSegura", // Aqui, você deve garantir que a senha seja criptografada em produção
      role: "instructor", // Usando o enum UserRole
    },
  });

  const student1 = await prisma.user.create({
    data: {
      name: "Ana Souza",
      email: "ana@example.com",
      password: "senhaSegura",
      role: "student",
    },
  });

  const student2 = await prisma.user.create({
    data: {
      name: "Lucas Lima",
      email: "lucas@example.com",
      password: "senhaSegura",
      role: "student",
    },
  });

  // Criar Exercícios
  const exercise1 = await prisma.exercise.create({
    data: {
      name: "Flexão de Braço",
      description: "Exercício para o peito e tríceps.",
    },
  });

  const exercise2 = await prisma.exercise.create({
    data: {
      name: "Agachamento",
      description: "Exercício para as pernas e glúteos.",
    },
  });

  const exercise3 = await prisma.exercise.create({
    data: {
      name: "Levantamento Terra",
      description: "Exercício para a parte posterior das pernas e costas.",
    },
  });

  // Criar Treinos
  const workout1 = await prisma.workout.create({
    data: {
      title: "Treino de Peito",
      description: "Treino focado em peito e tríceps.",
      instructorId: instructor.id,
      exercises: {
        create: [
          { exerciseId: exercise1.id, order: 1, reps: 10, sets: 3 },
          { exerciseId: exercise2.id, order: 2, reps: 10, sets: 3 },
        ],
      },
    },
  });

  const workout2 = await prisma.workout.create({
    data: {
      title: "Treino de Pernas",
      description: "Treino focado em pernas e glúteos.",
      instructorId: instructor.id,
      exercises: {
        create: [
          { exerciseId: exercise2.id, order: 1, reps: 12, sets: 4 },
          { exerciseId: exercise3.id, order: 2, reps: 8, sets: 3 },
        ],
      },
    },
  });

  console.log({ instructor, student1, student2, workout1, workout2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
