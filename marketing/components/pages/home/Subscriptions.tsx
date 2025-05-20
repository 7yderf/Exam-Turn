import { ReactElement } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import Button from "@marketing/components/ui/Button";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@marketing/components/ui/Card";

const Subscriptions = (): ReactElement => (
  <section className="w-full bg-gray-100 pt-10 pb-12 md:pb-32">
    <div className="max-w-7xl mx-auto">
      <div className="flex text-center justify-center items-center flex-col gap-12">
        <div className="flex gap-4 lg:gap-2 flex-col font-semibold text-primary px-4">
          <h2 className="text-3xl md:text-4xl text-center">Subscriptions</h2>
          <p className="text-sm md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Whether you want to just check out MHNTI for free, or take advantage
            of our library of content and experts, we have a plan for you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center px-4 lg:px-24">
          {/* Free Card */}
          <Card className="w-full max-w-80 rounded-md bg-white border border-blue-500 p-4 lg:p-6 mt-0 md:mt-12">
            <CardHeader className="gap-4 py-4">
              <CardTitle className="text-xl font-bold text-center">
                FREE
              </CardTitle>
              <CardDescription className="text-base font-bold text-gray-600">
                Organize across all apps by hand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <div className="flex flex-row justify-center items-center gap-2 text-xl">
                  <span className="text-[40px] font-bold text-blue-500">0</span>
                  <div className="flex flex-col font-semibold text-blue-500 text-left">
                    <span className="text-base">$</span>
                    <span className="text-base">Per Month</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Unlimited product updates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Unlimited product updates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Unlimited product updates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-gray-200" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">1GB Cloud storage</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-gray-200" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Email and community support
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="info">Try for free</Button>
              </div>
            </CardContent>
          </Card>

          {/* Standard Card */}
          <Card className="w-full max-w-80 rounded-md bg-accent-5 border border-blue-500 p-4 lg:p-6 mt-12 md:mt-0">
            <CardHeader className="gap-4 py-4">
              <CardTitle className="text-xl font-bold text-white text-center">
                STANDARD
              </CardTitle>
              <CardDescription className="text-base font-bold text-white">
                Organize across all apps by hand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <div className="flex flex-row justify-center items-center gap-2 text-xl">
                  <span className="text-[40px] font-bold text-blue-500">
                    79.99
                  </span>
                  <div className="flex flex-col font-semibold text-blue-500 text-left">
                    <span className="text-base">$</span>
                    <span className="text-base">Per Month</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-start text-white">
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Unlimited product updates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Unlimited product updates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Unlimited product updates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">1GB Cloud storage</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-gray-200" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Email and community support
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="info">Try for free</Button>
              </div>
            </CardContent>
          </Card>

          {/* Premium Card */}
          <Card className="w-full max-w-80 rounded-md bg-white border border-blue-500 p-4 lg:p-6 mt-12">
            <CardHeader className="gap-4 py-4">
              <CardTitle className="text-xl font-bold text-center">
                PREMIUM
              </CardTitle>
              <CardDescription className="text-base font-bold text-gray-600">
                Organize across all apps by hand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <div className="flex flex-row justify-center items-center gap-2 text-xl">
                  <span className="text-[40px] font-bold text-blue-500">
                    980
                  </span>
                  <div className="flex flex-col font-semibold text-blue-500 text-left">
                    <span className="text-base">$</span>
                    <span className="text-base">Per Year</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Unlimited product updates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Unlimited product updates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Unlimited product updates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">1GB Cloud storage</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckCircleIcon className="size-5 lg:size-8 text-green-500" />
                    <div className="flex flex-col text-left">
                      <p className="text-xs lg:text-sm">
                        Email and community support
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="info">Try for free</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default Subscriptions;
