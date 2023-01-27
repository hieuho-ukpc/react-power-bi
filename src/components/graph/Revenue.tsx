import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

export default function PowerBIRevenueReport() {
  return (
    <PowerBIEmbed
      embedConfig={{
        type: "report", // Supported types: report, dashboard, tile, visual and qna
        height: 1000,
        id: "1412cd07-4578-43e4-9fd5-ed75de1a4af5",
        embedUrl:
          "https://app.powerbi.com/reportEmbed?reportId=1412cd07-4578-43e4-9fd5-ed75de1a4af5&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVLLVNPVVRILUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwUXVlcnlEYXRhU2FhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhUGFhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhRXhwb3J0VG8iOnRydWV9fQ%3d%3d",
        accessToken:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMGJhYmJhYjktMjU2MS00OGYwLWE1ZGUtMGI0YWM2NDczOTUxLyIsImlhdCI6MTY2NzkxNzQ3MCwibmJmIjoxNjY3OTE3NDcwLCJleHAiOjE2Njc5MjI1MzIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFZT2xLN2tOL0t5N2FoOUExbFN3cld3ZVN6clBCbGJId21MQXA1cmYrVWNEUnQwY2FHTkFON0VMMjF6MTI0QXBNIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiSG8iLCJnaXZlbl9uYW1lIjoiSGlldSIsImlwYWRkciI6IjQyLjExNS4xMzkuOTQiLCJuYW1lIjoiSGlldSBIbyIsIm9pZCI6IjAzYjU2N2U0LTQwOTEtNGIyZi04MzZkLTk3OTliY2VjZWI1OCIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS04MDk3Mzg2OTItMjAxNjE1NjY2Mi0yNjMyMDYyMjE1LTIzNTAiLCJwdWlkIjoiMTAwMzIwMDFGNjY1QTIwNyIsInJoIjoiMC5BVjRBdWJxckMyRWw4RWlsM2d0S3hrYzVVUWtBQUFBQUFBQUF3QUFBQUFBQUFBQmVBQ0kuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiYjNXa1lHNjFKbktlMjlWZmhGVEs5Z0tKdC0ySEFGdVZyMmhuMnk1ekNaOCIsInRpZCI6IjBiYWJiYWI5LTI1NjEtNDhmMC1hNWRlLTBiNGFjNjQ3Mzk1MSIsInVuaXF1ZV9uYW1lIjoiaGlldS5ob0B1a3Bhcmtpbmdjb250cm9sLmNvbSIsInVwbiI6ImhpZXUuaG9AdWtwYXJraW5nY29udHJvbC5jb20iLCJ1dGkiOiJnMWtBcjJJVU0wNjZwTkFOT0dtT0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.TSp7XIkLTBXiXTgVGsdjU-jHCp2hHGNuV49mn8CuvrS0RipergtZEipSA2FBgoNXRrYvrBAdOwYHj8XDy7cOojsDPUg5StXmZlqvcK3BJ0beAEQKWyZMlnElAatdM6a8H9ZainNNi1IJnMFG2QoRc2klTVa_1Ve2JHNozV9qd42f7jRS14xtSXPXuQn2CzbMKvO3a2bbeRpQ5oyRsAo_lU-3htkw8Y8UNx4eSd-mz-yLixD4OmD9uigey8PO7wj1NRacoD43Zj-t-BzORfgMANOUs4xr7PRewHfScDqAZ7OHvMDbUqjvrhmQA7kjt2j6SNAsM5K76-6d3LaOjg4wgw", // Keep as empty string, null or undefined
        tokenType: models.TokenType.Aad,
      }}
      cssClassName="revenue-container"
    />
  );
}
