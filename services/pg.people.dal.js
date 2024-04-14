const dal = require("./pg.dbSimple");

async function getPeople() {
  const sql = `SELECT "ID" AS _id, "FirstName", "LastName", "Email" FROM public."People" ORDER BY "ID" DESC;`;
  try {
    let results = await dal.query(sql);
    return results.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function addPeople(FirstName, LastName, Email) {
  const sql = `INSERT INTO public."People"("FirstName", "LastName", "Email") VALUES ($1, $2, $3) RETURNING "ID";`;
  try {
    let result = await dal.query(sql, [FirstName, LastName, Email]);
    return result.rows[0].id;
  } catch (error) {
    if (error.code === "23505") return error.code;
    console.log(error);
    throw error;
  }
}

async function patchPeople(ID, FirstName, LastName, Email) {
  const sql = `UPDATE public."People" SET "FirstName"=$2, "LastName"=$3, "Email"=$4 WHERE "ID"=$1;`;
  try {
    let result = await dal.query(sql, [ID, FirstName, LastName, Email]);
    return result.rowCount;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deletePeople(ID) {
  const sql = `DELETE FROM public."People" WHERE "ID" = $1;`;
  try {
    let result = await dal.query(sql, [ID]);
    return result.rowCount;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getPeople,
  addPeople,
  patchPeople,
  deletePeople,
};
