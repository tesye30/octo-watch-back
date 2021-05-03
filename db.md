# Rascunho
# octowatch

Usei o [HeidiSQL](https://www.heidisql.com/) para criar as tabelas.

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
|comment   |VARCHAR   |150       |[ ]       |[ ]       |[ ]       |'0'       |
|work_id Fk|INT       |10        |[x]       |[ ]       |[ ]       |0         |

### user_comment
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|user_id FK|INT       |10        |[x]       |[ ]       |[ ]       |0         |
|comm_id Fk|INT       |10        |[x]       |[ ]       |[ ]       |0         |

#### work_episode
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|ep_id FK  |INT       |10        |[x]       |[ ]       |[ ]       |0         |
|work_id FK|INT       |10        |[x]       |[ ]       |[ ]       |0         |

#### work_category
|Rows      |Type      |Length    |Unsigned  |Allow Null|Zerofill  |Default   |
|---       |---       |---       |---       |---       |---       |---       |
|cat_id FK |INT       |10        |[x]       |[ ]       |[ ]       |0         |
|work_id FK|INT       |10        |[x]       |[ ]       |[ ]       |0         |