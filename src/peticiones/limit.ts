import  { Request, Response, NextFunction } from 'express';


interface RequestCount {
  [ip: string]: number;
}


function rateLimit(maxRequests: number, windowMs: number, message: string) {
  let requests: RequestCount = {}; 
  let windowStart = Date.now(); 

  return function(req: Request, res: Response, next: NextFunction) {
    const ip = req.ip as string; 


    if (Date.now() - windowStart >= windowMs) {
      requests = {};
      windowStart = Date.now();
    }


    requests[ip] = (requests[ip] || 0) + 1;

// verifica las cantidad de solicitudes que se ha hecho 
    if (requests[ip] > maxRequests) {
      return res.status(429).send(message); 
    }
    next();
  };
}



export const LimiterCount = rateLimit(6, 60 * 60 * 1000, "Demasiadas peticiones realizadas, intenta después de 1 hora");


