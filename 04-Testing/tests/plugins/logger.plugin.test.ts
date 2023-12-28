import { buildLogger, logger as wistonLogger } from '../../src/plugins/logger.plugin';


describe(`plugins/logger.plugin`, () => {
  test('buildLogger should return a fuction logger', () => {
    const logger = buildLogger('test');
    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
  });

  test(`logger.log should log a message`, () => {
    const winstonLoggerMock = jest.spyOn(wistonLogger, 'log');

    const message = 'test message';
    const service = 'test service';

    const logger = buildLogger(service);

    logger.log(message);
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'info', expect.objectContaining(
        {
          level: 'info',
          message,
          service,
        })
    );

  });

});