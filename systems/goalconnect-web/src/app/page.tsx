import Link from 'next/link';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@goalconnect/ui-components';

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <main className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold">GoalConnect</h1>
        <p className="text-muted-foreground">
          Web app that assembles feature packages: players (Feature X) and videos/matches (Feature Y).
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Feature X demo</CardTitle>
              <CardDescription>Player roster + profile card</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/feature-x-demo">
                <Button>Open</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Y demo</CardTitle>
              <CardDescription>Video library + match history</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/feature-y-demo">
                <Button variant="secondary">Open</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
