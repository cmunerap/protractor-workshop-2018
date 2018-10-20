import { SpecReporter } from 'jasmine-spec-reporter';
import { AwesomeReport } from 'jasmine-awesome-report';

export let reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: true
    }
  }));

  const config = {
    fullPath: 'reports',
    fileName: 'awesome',
    merge: true
  };
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};
