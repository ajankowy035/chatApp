import {
  Controller,
  Get,
  Logger,
  OnApplicationBootstrap,
} from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController implements OnApplicationBootstrap {
  private readonly logger = new Logger(HealthController.name);
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    return this.health
      .check([() => this.db.pingCheck('Database')])
      .catch((e) => e.response);
  }

  async onApplicationBootstrap() {
    const details = await this.check();
    for (const service in details) {
      const { status } = details[service];
      this.logger.log(`${service} is ${status}`);
    }
  }
}
