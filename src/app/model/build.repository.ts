import { Injectable } from "@angular/core";
import { Build } from './Build';
import { StaticDataSource } from './static.datasource';

@Injectable()

export class BuildRepository {
    private builds: Build[] = [];

    constructor(private datasource: StaticDataSource) {
        datasource.getBuilds().subscribe(data => {
            this.builds = data;
        })
    }

    getBuilds(): Build[] {
        return this.builds;
    }

    getBuildById(id: string) : Build{
        return this.builds.find(a => a.Id == id);
    }

    getBuildByStatus(status:string): Build[]{
        return this.builds.filter(a=>a.Status==status);
    }
}


