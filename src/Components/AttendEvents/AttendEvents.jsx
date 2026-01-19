import { Card } from "reactstrap";

export default function AttendEvents() {
    const navigationCards = [
       {
      id: 1,
      title: 'My Conversations',
      icon: MessageSquare,
      description: 'View your conversations'
    },
    {
      id: 2,
      title: 'Bookmarks',
      icon: Bookmark,
      description: 'Your saved bookmarks'
    },
    {
      id: 3,
      title: 'Newsletters',
      icon: Mail,
      description: 'Subscribe to newsletters'
    },
    {
      id: 4,
      title: 'Get Connected',
      icon: Plus,
      description: 'Connect with others'
    }
    ]

    return(
        <div>
            {navigationCards.map((card, index) => {
                <Card key={card}>
                    <div>
                        <div>
                            <div>
                                <card.icon />
                            </div>
                            <h3>{card.title}</h3>
                        </div>
                    </div>
                </Card>
            })}
        </div>
        // <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        //   {navigationCards.map((card) => {
        //     const IconComponent = card.icon
        //     return (
        //       <Card key={card.id} className="border border-border bg-card p-6 transition-all hover:shadow-sm">
        //         <div className="flex flex-col items-start gap-4">
        //           <div className="rounded-full bg-muted p-3">
        //             <IconComponent className="h-6 w-6 text-foreground" />
        //           </div>
        //           <h3 className="font-medium text-foreground">{card.title}</h3>
        //         </div>
        //       </Card>
        //     )
        //   })}
        // </div>
    );
}