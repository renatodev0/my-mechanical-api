import { firebaseConfig } from '@config/firebase';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request, Response } from 'express';
import * as admin from 'firebase-admin';

admin.initializeApp(firebaseConfig);

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();

    const idToken = req.headers.authorization?.split(' ')[1];

    if (!idToken) {
      res.status(401).json({ message: 'Token de acesso não fornecido.' });
      return false;
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req['user'] = decodedToken;
      return true;
    } catch (error) {
      res.status(401).json({ message: 'Token de acesso inválido.' });
      return false;
    }
  }
}
