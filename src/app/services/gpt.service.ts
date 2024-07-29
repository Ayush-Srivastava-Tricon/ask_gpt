import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  private apiUrl = 'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions';
  private apiKey = '82f6a5ff3cmshc9f47800346a992p147817jsn85cf192dce5c';
  private apiHost = 'cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  sendMessage(userInput: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.apiHost
    });

    const body = JSON.stringify({
      messages: [{ role: 'user', content: userInput }],
      model: 'gpt-4-turbo-2024-04-09',
      max_tokens: 100,
      temperature: 0.9,
    });

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
