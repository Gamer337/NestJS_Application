import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
    // imports: [UsersModule, PassportModule.register({ session: true })],
    // providers: [AuthService, LocalStrategy, SessionSerializer]

    imports: [UsersModule, PassportModule, JwtModule.register({
        secret: 'ROGUE', // PUT in env file
        signOptions: { expiresIn: '60s' },
    })],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
