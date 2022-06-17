import { EnrichPerformance, Invoice, Performance, Play, Plays, StatementData } from '../types';

export function createStatementData(invoice: Invoice, plays: Plays) {
  class PerformanceCalculator {
    performance: Performance;
    play: Play;
    constructor(aPerformance: Performance, play: Play) {
      this.performance = aPerformance;
      this.play = play;
    }

    get amount() {
      const { play, performance } = this;
      let result = 0;
      switch (play.type) {
        case 'tragedy':
          result = 40000;
          if (performance.audience > 30) {
            result += 1000 * (performance.audience - 30);
          }
          break;
        case 'comedy':
          result = 30000;
          if (performance.audience > 20) {
            result += 10000 + 500 * (performance.audience - 20);
          }
          result += 300 * performance.audience;
          break;
        default:
          throw new Error(`알 수 없는 장르: ${play.type}`);
      }
      return result;
    }

    get volumeCredits() {
      const { performance, play } = this;
      let result = 0;
      result += Math.max(performance.audience - 30, 0);
      if ('comedy' === play.type) {
        result += Math.floor(performance.audience / 5);
      }
      return result;
    }
  }
  
  const enrichPerformances = invoice.performances.map(enrichPerformance);
  const statementData: StatementData = {
    ...invoice,
    performances: enrichPerformances,
    totalAmount: totalAmount(enrichPerformances),
    totalVolumeCredits: totalVolumeCredits(enrichPerformances),
  };
  return statementData;

  function enrichPerformance(aPerformance: Performance) {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    const result: EnrichPerformance = {
      ...aPerformance,
      play: calculator.play,
      amount: calculator.amount,
      volumeCredits: calculator.volumeCredits,
    };
    return result;
  }

  function playFor(performance: Performance) {
    return plays[performance.playID];
  }

  function totalVolumeCredits(enrichPerformances: EnrichPerformance[]) {
    return enrichPerformances.reduce((total, perf) => total + perf.amount, 0);
  }

  function totalAmount(enrichPerformances: EnrichPerformance[]) {
    return enrichPerformances.reduce((total, perf) => total + perf.amount, 0);
  }

  function createPerformanceCalculator(aPerformance: Performance, aPlay: Play) {
    return new PerformanceCalculator(aPerformance, aPlay);
  }
}
