# Rascunho
# octowatch

Usei o [HeidiSQL](https://www.heidisql.com/) para criar as tabelas.

## Legendas
p_comme = parent_comment_id (Caso um comentário faça referência a outro);
type = Tipo do work (anime/filme/série);
site = Site do estúdi o;
image = Url de uma imagem;
ep_id = Id do episódio;
cat_id = Id da categoria.
commimg = Id das imagens que pertencem a um comentário.

## Entidades

#### users
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|id PK     |INT       |10        |[x]       |[ ]       |[ ]       |auto incre|
|name      |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |
|email     |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |
|password  |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |

#### works
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|id PK     |INT       |10        |[x]       |[ ]       |[ ]       |auto incre|
|name      |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |
|type      |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |
|sinopse   |VARCHAR   |300       |[ ]       |[ ]       |[ ]       |'0'       |
|image     |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |

#### studios
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|id PK     |INT       |10        |[x]       |[ ]       |[ ]       |auto incre|
|name      |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |
|site      |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |
|image     |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |

#### episodes
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|id PK     |INT       |10        |[x]       |[ ]       |[ ]       |auto incre|
|name      |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |
|image     |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |
|work_id FK|INT       |10        |[x]       |[ ]       |[ ]       |'0'       |

#### categories
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|id PK     |INT       |10        |[x]       |[ ]       |[ ]       |auto incre|
|name      |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |

#### comments
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|id PK     |INT       |10        |[x]       |[ ]       |[ ]       |0         |
|comment   |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |
|work_id FK|INT       |10        |[x]       |[ ]       |[ ]       |0         |
|user_id FK|INT       |10        |[x]       |[ ]       |[ ]       |0         |
|p_comme FK|INT       |10        |[x]       |[x]       |[ ]       |0         |
|commimg FK|INT       |10        |[x]       |[x]       |[ ]       |0         |

#### commentImages
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|ep_id FK  |INT       |10        |[x]       |[ ]       |[ ]       |0         |
|work_id FK|INT       |10        |[x]       |[ ]       |[ ]       |0         |

#### work_episodes
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|ep_id FK  |INT       |10        |[x]       |[ ]       |[ ]       |0         |
|work_id FK|INT       |10        |[x]       |[ ]       |[ ]       |0         |

#### work_categories
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|cat_id FK |INT       |10        |[x]       |[ ]       |[ ]       |0         |
|work_id FK|INT       |10        |[x]       |[ ]       |[ ]       |0         |