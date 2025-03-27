import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [PrismaModule,ProductosModule,AuthModule,UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}



