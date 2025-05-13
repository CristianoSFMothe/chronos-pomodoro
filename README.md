# Chronos Pomodoro

Sistema de gerenciamento de tempo de tarefas

## Lógica real de ciclos Pomodoro

A técnica Pomodoro é uma ferramenta de gerenciamento de tempo que ajuda a
trabalhar, melhorando o foco e a produtividade. Ela consiste em trabalhar em
intervalos de minutos. Funciona assim:

1. Você define uma tarefa que quer fazer, como **ler**, **estudar** ou
   **trabalhar em algo complexo**.
2. Depois, escolhe os **tempos de foco**, **descanso curto** e **descanso
   longo**.
3. Quando começar, você **trabalha focado durante o tempo de foco** e não faz
   nada além daquela tarefa.
4. Quanto o timer apitar, você **faz um descanso curto**, e literalmente dá uma
   pausa.

### Como funciona os ciclos completos:

- A cada **tempo de foco** + **descanso curto**, você completa um do **Pomodoro
  ciclo**.
- O ciclo é composto é formado por **quarto tempos de foco**, separados por
  **três tempos de descanso curto**.
- Depois do **quarto tempo de foco**, em vez de um **descanso curto**, você faz
  um **descanso longo**, para relaxar mais tempo

#### Exemplos de sequência com tempo clássicos

- **Exemplo: Tarefa Estudar**

  - **Tempo de foco:** 25 minutos
  - **Descanso curto:** 5 minutos
  - **Descanso longo:** 15 minutos

- **A sequência**

1. Trabalho focado durante 25 minutos
2. Descanso curto de 5 minutos
3. Trabalho focado durante 25 minutos
4. Descanso curto de 5 minutos
5. Trabalho focado durante 25 minutos
6. Descanso curto de 5 minutos
7. Trabalho focado durante 25 minutos
8. Descanso longo de 15 minutos **(Fim do ciclo completo)**

> Você poderá ajustar os **tempos de acordo com sua rotina** e com o tipo de
> tarefa que vai fazer Algumas tarefas vão precisar de mais ciclos, outras de
> menos Algumas tarefas irão necessitar demais tempo de foco, outras menos

---

## O que muda no Chronos?

No Chronos, a lógica de ciclos Pomodoro é integrada ao sistema de gerenciamento
de tempo, sendo separada assim:

| Ciclo | Tipo de Tarefa | Tempo | Cor da Bolinha |
| ----- | -------------- | ----- | -------------- |
| 1     | Foco           | 25    | Amarela        |
| 2     | Descanso Curto | 5     | Verde          |
| 3     | Foco           | 25    | Amarela        |
| 4     | Descanso Curto | 5     | Verde          |
| 5     | Foco           | 25    | Amarela        |
| 6     | Descanso Curto | 5     | Verde          |
| 7     | Foco           | 25    | Amarela        |
| 8     | Descanso Longo | 15    | Azul           |
