import express, { Request, Response, Express} from "express"
import cors from 'cors';
import connection from "./connection";




const app: Express = express();

app.use(express.json());
app.use(cors());

//Exercício 1 - 

//b)
const getActor = async (name:string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM atores WHERE name = "${name}"
  `)
  
  return result[0]
}

//c)
const countActors = async (gender:string): Promise<any> =>{
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM atores WHERE gender="${gender}"
  `)
  const count = result[0][0].count;

  return count;
}

//Exercício 2 -

//a)
const updateActor = async (id: string, salary: number): Promise<void> => {
  await connection ("atores")
    .update({
      salary: salary
    })
    .where("id", id);
};

//b)
const deleteActor = async (id: string): Promise<void> => {
  await connection ("atores")
    .delete()
    .where("id", id);
};

//c)
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

//Exercício 3 - 

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM atores WHERE id = '${id}'
  `)
	return result[0][0]
}

//a) 
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)

  } catch (err:any) {
    res.status(400).send({message: err.message});
  }
});

//b)
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender
    const count = await countActors(gender as string);

    res.status(200).send({quantity: count})

  } catch (err:any) {
    res.status(400).send({message: err.message});
  }
});

//Exercício 4 -

//a)
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateActor(req.body.id, req.body.salary);
    res.status(200).send({message: "Success",});

  } catch (err:any) {
    res.status(400).send({message: err.message,});
  }
});

//b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);

  } catch (err:any) {res.status(400).send({message: err.message,});
  }
});