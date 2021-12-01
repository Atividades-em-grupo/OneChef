export interface Receita {
  id: string;
  nome: string;
  descricao: string;
  ingrediente: string[];
  preparo: string[];
  avaliacao: number;
  tempo: string;
  rendimento: string;
  imagem_principal: string;
  imagem_secundaria: string;
  imagem_terciaria: string;
  imagem_quaternaria: string;
}
