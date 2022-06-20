import { EnrichPerformance, Invoice, Performance, Play, Plays, StatementData } from './types';

class PerformanceCalculator {
  performance: Performance;
  play: Play;
  constructor(aPerformance: Performance, play: Play) {
    this.performance = aPerformance;
    this.play = play;
  }

  // 서브클래스를 위한 return type 설정
  get amount(): number {
    throw new Error('서브 클래스에서 처리해주세요.');
  }

  // 연극 유형 별 추가 계산법은 오버라이드해서 작성하도록
  get volumeCredits(): number {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount(): number {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount(): number {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    return result;
  }
  get volumeCredits(): number {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}

export function createStatementData(invoice: Invoice, plays: Plays) {
  
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
    switch (aPlay.type) {
      case "tragedy": return new TragedyCalculator(aPerformance, aPlay);
      case "comedy": return new ComedyCalculator(aPerformance, aPlay);
      default:
        throw new Error(`알 수 없는 장르: ${aPlay.type}`);
    }
  }

}
