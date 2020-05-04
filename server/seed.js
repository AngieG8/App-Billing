const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function createBadges(limit = 10) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const firstName = faker.name.firstName();
    const Nit = faker.name.Nit();
    const email = faker.internet.email();
    const FechaFactura =  faker.name.FechaFactura();
    const Valor = faker.internet.Valor();

    result.push({
      id: faker.random.uuid(),
      firstName,
      lastName:  faker.name.lastName(),
      Nit,
      FechaFactura,
      DiasVencer:  faker.name.DiasVencer(),
      Valor,
      ModoPago: faker.name.ModoPago(),
      email,
      avatarUrl: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
    });
  }

  return result;
}

function main() {
  const data = {
    badges: createBadges(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
