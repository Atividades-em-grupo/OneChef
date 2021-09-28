export interface Receita {
  id_receita: number;
  nome: string;
  descricao: string;
  ingrediente: string;
  preparo: string;
  avaliacao: number;
  imagem_principal: string;
  imagem_secundaria: string;
  imagem_terciaria: string;
  categoria_id: number;
}
