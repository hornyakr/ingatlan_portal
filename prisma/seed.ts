import "dotenv/config";

import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.favorite.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.propertyFeature.deleteMany();
  await prisma.propertyImage.deleteMany();
  await prisma.property.deleteMany();
  await prisma.agent.deleteMany();
  await prisma.office.deleteMany();
  await prisma.savedSearch.deleteMany();
  await prisma.inquiry.deleteMany();
  await prisma.user.deleteMany();

  const adminUser = await prisma.user.create({
    data: {
      email: "admin@ingatlanportal.hu",
      name: "Admin User",
      role: "ADMIN",
      phone: "+3611111111",
    },
  });

  const officeUser = await prisma.user.create({
    data: {
      email: "office@luxhome.hu",
      name: "Lux Home Iroda",
      role: "OFFICE",
      phone: "+36201111111",
    },
  });

  const agentUser = await prisma.user.create({
    data: {
      email: "agent@luxhome.hu",
      name: "Kiss Jakab",
      role: "AGENT",
      phone: "+36301234567",
    },
  });

  const seekerUser = await prisma.user.create({
    data: {
      email: "erdeklodo@example.com",
      name: "Nagy Péter",
      role: "SEEKER",
      phone: "+36305555555",
    },
  });

  const office = await prisma.office.create({
    data: {
      userId: officeUser.id,
      name: "Lux Home Ingatlaniroda",
      slug: "lux-home-ingatlaniroda",
      description:
        "Prémium budapesti és balatoni ingatlanok közvetítése.",
      email: "info@luxhome.hu",
      phone: "+36201111111",
      website: "https://luxhome.hu",
      logoUrl:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      coverUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      city: "Budapest",
      district: "XII. kerület",
      address: "Alkotás utca 10.",
      latitude: 47.49801,
      longitude: 19.03991,
    },
  });

  const agent = await prisma.agent.create({
    data: {
      userId: agentUser.id,
      officeId: office.id,
      name: "Kiss Jakab",
      slug: "kiss-jakab",
      bio: "10 éves tapasztalattal rendelkező prémium ingatlan tanácsadó.",
      phone: "+36301234567",
      email: "kiss.jakab@luxhome.hu",
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      position: "Senior értékesítő",
    },
  });

  const propertyOne = await prisma.property.create({
    data: {
      ownerId: officeUser.id,
      officeId: office.id,
      agentId: agent.id,

      title: "Luxus villa panorámás budai környezetben",
      slug: "luxus-villa-panorama-buda",
      description:
        "Modern, prémium kivitelezésű családi ház panorámával és wellness részleggel.",

      status: "PUBLISHED",
      propertyType: "HOUSE",
      listingType: "SALE",

      price: 289000000,
      currency: "HUF",

      areaM2: 320,
      rooms: 6,
      bedrooms: 4,
      bathrooms: 3,
      floor: 0,
      totalFloors: 2,
      lotSizeM2: 1200,
      builtYear: 2021,

      city: "Budapest",
      district: "XII. kerület",
      address: "Zugligeti út 24.",
      postalCode: "1125",

      latitude: 47.5022,
      longitude: 18.9876,

      isFeatured: true,
      publishedAt: new Date(),

      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
            alt: "Luxus villa nappali",
            type: "COVER",
            sortOrder: 0,
          },
          {
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            alt: "Luxus villa hálószoba",
            type: "GALLERY",
            sortOrder: 1,
          },
          {
            url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
            alt: "Luxus villa kert",
            type: "GALLERY",
            sortOrder: 2,
          },
        ],
      },

      features: {
        create: [
          {
            key: "futes",
            value: "Hőszivattyú",
          },
          {
            key: "parkolas",
            value: "4 állásos garázs",
          },
          {
            key: "extrak",
            value: "Medence, szauna",
          },
        ],
      },
    },
    include: {
      images: true,
      features: true,
    },
  });

  const propertyTwo = await prisma.property.create({
    data: {
      ownerId: officeUser.id,
      officeId: office.id,
      agentId: agent.id,

      title: "Modern belvárosi luxuslakás",
      slug: "modern-belvarosi-luxuslakas",
      description:
        "Panorámás, teljesen felújított belvárosi lakás prémium környezetben.",

      status: "PUBLISHED",
      propertyType: "APARTMENT",
      listingType: "SALE",

      price: 149900000,
      currency: "HUF",

      areaM2: 118,
      rooms: 4,
      bedrooms: 3,
      bathrooms: 2,
      floor: 5,
      totalFloors: 7,
      builtYear: 2019,

      city: "Budapest",
      district: "V. kerület",
      address: "Belgrád rakpart 18.",
      postalCode: "1056",

      latitude: 47.4897,
      longitude: 19.0492,

      isFeatured: true,
      publishedAt: new Date(),

      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
            alt: "Modern nappali",
            type: "COVER",
            sortOrder: 0,
          },
          {
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
            alt: "Konyha",
            type: "GALLERY",
            sortOrder: 1,
          },
        ],
      },

      features: {
        create: [
          {
            key: "kilatas",
            value: "Dunai panoráma",
          },
          {
            key: "lift",
            value: "Van",
          },
        ],
      },
    },
  });

  await prisma.favorite.create({
    data: {
      userId: seekerUser.id,
      propertyId: propertyOne.id,
    },
  });

  await prisma.savedSearch.create({
    data: {
      userId: seekerUser.id,
      name: "Budai luxus házak",
      filters: {
        city: "Budapest",
        district: "XII. kerület",
        listingType: "SALE",
        propertyType: "HOUSE",
        minPrice: 100000000,
        maxPrice: 400000000,
      },
    },
  });

  await prisma.inquiry.create({
    data: {
      userId: seekerUser.id,
      propertyId: propertyOne.id,
      name: "Nagy Péter",
      email: "erdeklodo@example.com",
      phone: "+36305555555",
      message:
        "Szeretnék időpontot egyeztetni az ingatlan megtekintésére.",
    },
  });

  await prisma.lead.create({
    data: {
      propertyId: propertyOne.id,
      officeId: office.id,
      agentId: agent.id,
      userId: seekerUser.id,

      name: "Nagy Péter",
      email: "erdeklodo@example.com",
      phone: "+36305555555",
      message:
        "Érdekelne az ingatlan finanszírozási lehetőségekkel együtt.",
      status: "NEW",
    },
  });

  console.log("Seed completed successfully.");
  console.log({
    adminUser,
    office,
    agent,
    propertyOne,
    propertyTwo,
  });
}

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });